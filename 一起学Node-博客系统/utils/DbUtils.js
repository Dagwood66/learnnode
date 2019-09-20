let mysql = require("mysql");

let connection = mysql.createConnection({
    localhost: process.env.L_Mysql_Host,
    user: process.env.L_Mysql_User,
    password: process.env.L_Mysql_Password,
    database: process.env.L_Mysql_Data,
    useConnectionPooling: true
});

function queryToPromise(query, params = []) {
    return new Promise((resolve, reject) => {
        connection.query(query, params, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = {
    query: queryToPromise
};