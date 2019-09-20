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

function getUserByUser(user) {
    return DbUtils.query("select * from users where user=?", [user]);
}

function getUserBySession(session) {
    return DbUtils.query("select * from users where session=?", [session]);
}

function updateUserSession(user, session) {
    return DbUtils.query("update users set session = ? where user= ?", [session, user]);
}

module.exports = {
    getUserList: getUserList,
    isRegister: isRegister,
    installUser: installUser,
    getUserByUser: getUserByUser,
    getUserBySession: getUserBySession,
    updateUserSession: updateUserSession,
};