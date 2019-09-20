let path = require("path");
let express = require("express");
let formidable = require("express-formidable");
let router = require("./routes/index");
let app = express();

// 设置模板目录
app.set("views", path.resolve(__dirname, "views"));
// 设置模板引擎
app.set("view engine", "ejs");
// 设置静态目录
app.use(express.static("public"));
// from数据解析
app.use(formidable({
    encoding: "utf-8"
}));

router(app);

app.listen(process.env.L_Post, function () {
    console.log(`启动时间:${new Date()}`);
    console.log(`启动地址:http://localhost:${process.env.L_Post}`);
});