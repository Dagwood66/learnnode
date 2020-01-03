let http = require("http");
// node app.js 执行文件

// node --inspect-brk app.js 默认第一行断点调试
// chrome chrome://inspect

// 自定义环境变量
//      npm i cross-env -g
//      cross-env NODE_ENV=test node app
// 自定义变量使用
//      process.env.NODE_ENV

// 热修复
//      env-cmd -e base,dev node --inspect-brk index.js // 断点调试无热更新
//      env-cmd -e base,dev supervisor --ignore node_modules node --inspect index.js // 接口断点调试热更新
const hostname = "127.0.0.1";
const port = 3000;

let server = http.createServer((req, res) => {
    if (req.url === "/api/test") {
        res.writeHead(302, {
            'Location': '/#/test'
        });
        res.end();
    } else {
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});