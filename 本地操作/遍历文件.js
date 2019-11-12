let path = require("path");
let fs = require("fs");
let fileArr = [];

traversFileSync("D:\\lzh\\webstromproject\\", fileArr);

function traversFileSync(pathStr, arr) {
    if (isFilter(pathStr)) {
        return;
    }
    let result = fs.readdirSync(pathStr);
    result.forEach(item => {
        let nextPath = path.join(pathStr, item);
        let stats = fs.statSync(nextPath);
        if (stats.isDirectory()) {
            traversFileSync(nextPath, arr);
        } else {
            let content = fs.readFileSync(nextPath, "utf-8");
            arr.push({
                path: nextPath,
                content: content,
            });
        }
    });
}

function isFilter(pathStr) {
    let arr = [
        ".idea",
        ".git",
        ".svn",
        "node_modules",
        "dist",
        "learn",
        "konwledge",
    ];
    for (let i = 0; i < arr.length; i++) {
        let regExp = new RegExp(`${arr[i]}`);
        if (regExp.test(pathStr)) {
            return true;
        }
    }
    return false;
}

module.exports = {
    traversFileSync
};