const path = require("path");
const express = require("express");
const app = express();
let indexRouter = require("./routes/index");
let userRouter = require("./routes/users");

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
//
// app.use("/", indexRouter);
// app.use("/users", userRouter);

app.use(function (req, res, next) {
    console.log("1");
    next(new Error("asd"));
});

app.use(function (req, res, next) {
    console.log("2");
    res.status(200).end();
});

app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(500).send("Something broke");
});

app.listen(3000);