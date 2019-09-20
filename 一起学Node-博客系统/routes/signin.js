let express = require("express");
let UserModel = require("../models/User");
let router = express.Router();

router.get("/", function (request, response) {
    response.render("signin");
});

router.post("/", function (request, response) {
    let user = request.fields.user;
    let pwd = request.fields.pwd;
    UserModel.getUserByUser(user).then(res => {
        if (res.length > 0) {
            if (res[0].pwd === pwd) {
                UserModel.updateUserSession(user, request.session.id).then(res => {
                    request.session.user = res[0];
                    response.redirect("/");
                }, err => {
                    response.json({
                        err: err
                    });
                });
            } else {
                response.json({
                    err: "密码错误"
                });
            }
        } else {
            response.json({
                err: "账户名错误"
            });
        }
    }, err => {
        response.json({
            err: err
        });
    });
});

module.exports = router;