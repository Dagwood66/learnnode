module.exports = function (app) {
    app.get("/", function (request, response) {
        response.render("index");
    });
    app.use("/signup", require("./signup"));
    app.use("/signin", require("./signin"));
};