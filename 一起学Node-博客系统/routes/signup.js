let express = require("express");
let UserModel = require("../models/User");
let router = express.Router();

// 注册页
router.get("/", function (request, response) {
    response.render("signup");
});
// 注册接口
router.post("/", function (request, response) {
    UserModel.isRegister(request.fields.user).then(res => {
        if (res) {
            response.json({
                msg: "该用户已存在",
                err: new Error()
            });
        } else {
            let user = request.fields.user;
            let pwd = request.fields.pwd;
            UserModel.installUser(user, pwd).then(res => {
                response.redirect(`/?name=${user}&pwd=${pwd}`);
            }, err => {
                response.json({
                    err: err
                });
            });
        }
    }, err => {
        response.json({
            err: err
        });
    });
});

module.exports = router;