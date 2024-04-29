const express = require("express");
const router = express.Router();
const { handleUserLogin } = require("../controllers/userLogin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  token = await handleUserLogin(req.body);

  res.json({ token: token });
  
});

module.exports = router;
