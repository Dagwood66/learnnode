let path = require("path");
let fs = require("fs");
let fileUtils = require("./遍历文件");
let word = "";
// node 查找项目.js word=抢购专区
word = getArgv("word");

let arr = [];
fileUtils.traversFileSync("D:\\lzh\\webstromproject", arr);
arr.forEach(obj => {
    if (obj.content.indexOf(word) !== -1) {
        if (!/.(png|jpg|svg|gif|map)/.test(obj.path)) {
            console.log(obj.path);
        }
    }
});

function getArgv(key) {
    for (let i = 0; i < process.argv.length; i++) {
        let str = process.argv[i];
        let regExp = new RegExp(`${key}`);
        if (regExp.test(str)) {
            return str.split("=")[1];
        }
    }
    return "";
}