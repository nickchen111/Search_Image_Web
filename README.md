# Search_Image_Web

# 專案說明
* 網站功能: 串接其他網站的API並且利用React技術做出一個圖片搜尋網站, 使用者可以輸入關鍵字來搜尋相關圖片
* 網站畫面:
  * 網站首頁
      ![image](https://github.com/nickchen111/Search_Image_Web/blob/main/img/%E7%B6%B2%E7%AB%99%E9%A6%96%E9%A0%81.png)
      首頁呈現的會是piexel網站當日精選圖片, 使用者可以在搜尋欄搜尋關鍵字, 並且得到的圖片會顯示作者名稱以及可供下載的按鈕
  * 關於網站的內容說明
      ![image](https://github.com/nickchen111/Search_Image_Web/blob/main/img/%E9%97%9C%E6%96%BC%E7%B6%B2%E7%AB%99.png)
  * 搜尋貓咪關鍵字後的結果
      ![image](https://github.com/nickchen111/Search_Image_Web/blob/main/img/%E6%90%9C%E5%B0%8B%E8%B2%93%E5%92%AA.png)
  * 點選更多圖片可以看到更多的貓咪圖片
      ![image](https://github.com/nickchen111/Search_Image_Web/blob/main/img/%E6%9B%B4%E5%A4%9A%E5%9C%96%E7%89%871.png)
  * 點選結果
      ![image](https://github.com/nickchen111/Search_Image_Web/blob/main/img/%E6%9B%B4%E5%A4%9A%E5%9C%96%E7%89%872.png)
    
* 技術細節:
  * 串接API
  * 使用React框架達到SPA(sigle-page-application)的效果 使用 AJAX技術，我們可以編寫一些在瀏覽器上運行的 JavaScript。JavaScript 將向伺服器發出request ，接收response並使用新數據更新當前 HTML 頁面。 整個過程中， 只有數據通過網絡傳輸，而不是一個全新的 HTML 頁面
  * 利用Axios來寄送http request, 可以直接獲取的資料使用, 不用再將資料.json, 如此一來在資料的處理上比較方便

# English Version
* **Website Functionality:** Integrating APIs from other websites and utilizing React technology to create an image search website. Users can enter keywords to search for related images.

* **Website Screens:**
  * **Homepage:**
    ![Homepage](https://github.com/nickchen111/Search_Image_Web/blob/main/img/%E7%B6%B2%E7%AB%99%E9%A6%96%E9%A0%81.png)
    The homepage displays a selection of images from the Pixabay website. Users can search for keywords in the search bar and the resulting images will show the author's name along with a download button.

  * **About the Website:**
    ![About](https://github.com/nickchen111/Search_Image_Web/blob/main/img/%E9%97%9C%E6%96%BC%E7%B6%B2%E7%AB%99.png)

  * **Search Results for "Cat":**
    ![Search Results](https://github.com/nickchen111/Search_Image_Web/blob/main/img/%E6%90%9C%E5%B0%8B%E8%B2%93%E5%92%AA.png)

  * **Clicking "More Images" shows more cat images:**
    ![More Images](https://github.com/nickchen111/Search_Image_Web/blob/main/img/%E6%9B%B4%E5%A4%9A%E5%9C%96%E7%89%871.png)

  * **Clicking on a result:**
    ![Result](https://github.com/nickchen111/Search_Image_Web/blob/main/img/%E6%9B%B4%E5%A4%9A%E5%9C%96%E7%89%872.png)

* **Technical Details:**
  * API Integration
  * Using the React framework to achieve the SPA (single-page application) effect. Using AJAX technology, we can write JavaScript that runs in the browser. JavaScript will send requests to the server, receive responses, and update the current HTML page with new data. During this entire process, only data is transmitted over the network, not an entirely new HTML page.
  * Using Axios to send HTTP requests, directly accessing data without needing to parse it as .json. This makes data handling more convenient.
