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

