let path = require("path");
let express = require("express");
let app = express();
let indexRoute = require("./routes/index");
let usersRoute = require("./routes/users");

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRoute);
app.use("/users", usersRoute);

app.listen(3000);