let path = require("path");
let fs = require("fs");
let iconvLite = require("iconv-lite");

let testFilePath = path.join(__dirname, "test.txt");

fs.readFile(testFilePath, function (err, data) {
    if (!err) {
        // 转码
        console.log(iconvLite.decode(data,'gbk'));
    }
});