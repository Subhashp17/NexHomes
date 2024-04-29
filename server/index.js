const express = require("express");
const app = express();
const router = express.Router();
const userLogin = require("./routes/login");
    
const userRegister = require("./routes/register");
const cors = require("cors");
const Property = require("./routes/property");
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

app.use(cors())

app.use(bodyParser.json());
app.use("/login", userLogin);
app.use("/register", userRegister);

app.use("/property", Property);


app.listen(3002, console.log("Running on port 3000"));
