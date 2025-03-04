const express = require('express');
const app = express();
const path = require('path');

// 設定靜態資料夾 (分享整個page資料夾)
app.use(express.static(path.join(__dirname)));

// 啟動伺服器
app.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});
