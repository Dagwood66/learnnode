let DbUtils = require("../utils/DbUtils");

function getUserList() {
    return DbUtils.query("select * from users");
}

function isRegister(user) {
    return DbUtils.query("select * from users where user=?", [user]).then(res => res.length > 0, err => err);
}

function installUser(user, pwd) {
    return DbUtils.query("insert into users(user,pwd) values(?,?)", [user, pwd]);
}

module.exports = {
    getUserList: getUserList,
    isRegister: isRegister,
    installUser: installUser,
};