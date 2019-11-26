let path = require("path");
let fs = require("fs");

let basePath = path.join("D:", "lzh", "webstromproject");
let arr = [];
// 测试
traversFileSync(basePath, arr);

function traversFileSync(basePath, arr) {
    fs.readdirSync(basePath).forEach(item => {
        let nextPath = path.join(basePath, item);
        if (fs.statSync(nextPath).isDirectory()) {
            traversFileSync(nextPath, arr);
        } else {
            arr.push(nextPath);
        }
    });
}
