let express = require("express");
let app = express();
let indexRoute = require("./routes/index");
let usersRoute = require("./routes/users");

// 拦截其他请求
app.use(function (req, res, next) {
    // 执行下一个
    next();
});

// app.use(function (req, res, next) {
//     // 返回错误信息
//     next(new Error("Err"));
// });

// app.use(function (req, res, next) {
//     // 结束请求
//     res.status(200).end();
// });


// app.use(function (req, res, next) {
//     a
// });
// app.use(function (err, req, res, next) {
//     // 拦截中间件错误
//     next(err);
// });

app.use("/", indexRoute);
app.use("/users", usersRoute);

app.listen(3000);