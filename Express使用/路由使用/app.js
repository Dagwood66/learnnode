let express = require("express");
let app = express();
let indexRoute = require("./routes/index");
let usersRoute = require("./routes/users");

app.use("/", indexRoute);
app.use("/users", usersRoute);

app.listen(3000);