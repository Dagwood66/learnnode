let express = require("express");
let PostsModel = require("../models/Posts");
let router = express.Router();

router.get("/", function (request, response) {
    const author = request.query.author;
    PostsModel.getList(author).then(res => {
        response.render("article", {articleList: res});
    }, err => {
        response.json(err);
    });

});

module.exports = router;