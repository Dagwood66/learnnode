// 获取命令行参数

let argv = process.argv;
let execPath = argv[0];
let execFilePath = argv[1];
let params = argv.slice(2);

function getExecPath() {
    return execPath;
}

function getExecFilePath() {
    return execFilePath;
}

function getParams() {
    let obj = {};
    params.forEach(item => {
        let number = item.indexOf("=");
        if (number === -1) {
            obj[item] = item;
        } else {
            obj[item.substring(0, number)] = item.substring(number + 1, item.length);
        }
    });
    return obj;
}

console.log(getParams());

