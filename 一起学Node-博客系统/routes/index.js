module.exports = function (app) {
    app.get("/", function (request, response) {
        response.redirect("/posts");
    });
    app.use("/signup", require("./signup"));
    app.use("/signin", require("./signin"));
    app.use("/posts", require("./posts"));
};