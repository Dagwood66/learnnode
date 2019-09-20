let UserModel = require("../models/User");

module.exports = {
    injectSessionUser: function (request, response, next) {
        let sessionId = request.session.id;

        if (sessionId) {
            UserModel.getUserBySession(sessionId).then(res => {
                request.session.user = res[0] || null;
                next();
            }, err => {
                request.session.user = null;
                next();
            });
        } else {
            request.session.user = null;
            next();
        }
    }
};