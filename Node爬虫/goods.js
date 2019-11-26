let http = require("http");
let https = require("https");
let cheerio = require("cheerio");
let iconvLite = require("iconv-lite");
let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.argv[2] || "123456",
    database: "mall"
});

connection.connect();

loadHtml("http://product.dangdang.com/28471694.html");

function loadHtml(url) {
    http.get(url, res => {
        let rawData = [];
        res.on('data', (chunk) => {
            rawData.push(chunk);
        });
        res.on('end', () => {
            try {
                let $html = parseHtml(iconvLite.decode(Buffer.concat(rawData), "gbk"));
                analyze($html);
            } catch (e) {
                console.error(e.message);
            }
        });
    });
    setTimeout(function () {
        loadHtml(url.replace(/([^0-9]*)([0-9]*)([^0-9]*)/, `$1${parseInt(url.match(/([0-9]+)/g)[0]) + 1}$3`));
    }, Math.random() * 1000)
}

function parseHtml(rawData) {
    return cheerio.load(rawData);
}

function analyze($) {
    let name = $(".name_info h1").text().trim();
    let price = $("#original-price").text().trim().replace(/¥/g, "");
    let logo_url = $("#largePic").attr("src");
    let pid = $("link[rel='canonical']").attr("href").replace(/\/([0-9]*).html/, "$1");
    connection.query("insert into goods(name,price,logo_url,sys_remark) values(?,?,?,?)", [name, price, logo_url, pid], function (err, result) {
        if (!err) {
            console.log(result);
        }
    });
}