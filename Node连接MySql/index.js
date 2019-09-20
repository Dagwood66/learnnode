let mysql = require("mysql");

// 创建数据库连接
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "test"
});
// 连接数据库
connection.connect();
// 查询数据
connection.query(
    "select * from test",
    function (err, results, fields) {
        if (err) {
            throw err;
        }
        console.log("---" + "查询数据" + "---");
        console.log(results);
    }
);
// 插入数据
connection.query(
    "insert into test(name,url,alexa,country) values(?,?,?,?)",
    ["name1", "url1", 1, "country1"],
    function (err, results) {
        if (err) {
            throw err;
        }
        console.log("---" + "插入数据" + "---");
        console.log(results);
    }
);
// 修改数据
connection.query(
    "update test set name = ? where id = ?",
    ["name1", 1],
    function (err, results, fields) {
        if (err) {
            throw err;
        }
        console.log("---" + "修改数据" + "---");
        console.log(results);
    }
);
// 删除数据
connection.query(
    "delete from test",
    function (err, results, fields) {
        if (err) {
            throw err;
        }
        console.log("---" + "删除数据" + "---");
        console.log(results);
    }
);

