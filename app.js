/**************************************
    MAIN ENTRY
**************************************/
const express = require("express");
const router = require("./router");
const app = express();
const port = 3000;

/**************************************
    CONFIG
**************************************/
app.set("views", "views");
app.set("view engine", "ejs");


/**************************************
    USE 
**************************************/
app.use(express.static("public"));
app.use("/", router);
app.use("/about", router);
app.use("/register", router);

/**************************************
    LISTEN TO PORT
**************************************/
app.listen(port);
