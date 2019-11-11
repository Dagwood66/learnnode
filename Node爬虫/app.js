let http = require("http");
let https = require("https");
let cheerio = require("cheerio");

for (let i = 27608239; i < 27608259; i++) {
    loadHtml(i);
}

function loadHtml(num) {
    https.get(`https://book.douban.com/subject/${num}/collections`, res => {
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => {
            rawData += chunk;
        });
        res.on('end', () => {
            try {
                parseHtml(rawData);
            } catch (e) {
                console.error(e.message);
            }
        });
    });
}


function parseHtml(rawData) {
    let $ = cheerio.load(rawData);
    let nameStr = $("#content>h1").text();
    let name = nameStr.replace(/(\S*)"(\S*)"(\S*)/g, "$2");
    let numStr = $("#content>.grid-16-8>.article>h2>span").text();
    let num = numStr.replace(/(\d*)\S*/g, "$1");
    console.log(name + "---" + num);
}