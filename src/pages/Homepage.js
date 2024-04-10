import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import axios from "axios";
// 用logical operator && 如果左邊是true 執行右邊 如果左邊是false 執行左邊

const Homepage = () => {
  const auth = "0pNdG0EP3YnuLtrFdRok0LoSOwVE92AnPAdo2kcAK8SDGJfAc9HwCwKY";
  let [data, setData] = useState(null);
  let [input, setInput] = useState("");
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  //這裡有個bug Closure的部分 執行他的時候他已經認定了一個page值 我用setPage()去改 裡面是不會被改變的 所以設定Page+1
  const morePicture = async () => {
    let newURL;
    setPage(page + 1);
    if (input == "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos)); // or [...data, ...result.data.photos]
  };
  // 讓他能夠進到網站時就先列出精選圖片
  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    //做一個功能只要按下search就會發送req 到pexel的route
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  );
};

export default Homepage;
