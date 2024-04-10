import React from "react"; // 跟之前的const mongoose = require("mongoose"); 是一樣意思
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
/* react的特性 如果import or require一個類似html的文件
    可以用標籤的形式把他render出來  for <App /> -> self-closing tag*/
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
