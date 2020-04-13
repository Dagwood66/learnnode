let path = require("path");
let fs = require("fs");

let pathStr = path.join(__dirname, "a.txt");

let s = fs.readFileSync(pathStr, "utf8");
let strings = s.split("\r\n");

let obj = {};
strings.forEach(item => {
    let regExp = /(已修改 : |已删除 : |已增加 : )/;
    if (regExp.test(item)) {
        let arr = item.split("/");
        obj[arr[1] + '/' + arr[2]] = ""
    }
});

console.log(Object.getOwnPropertyNames(obj));
console.log("数量:" + Object.getOwnPropertyNames(obj).length);
