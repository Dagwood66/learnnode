let DbUtils = require("../utils/DbUtils");

function getList(author) {
    if (author != null) {
        return DbUtils.query("select * from article where user_id = ?", [author]);
    } else {
        return DbUtils.query("select * from article");
    }
}

module.exports = {
    getList: getList
};