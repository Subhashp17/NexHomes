const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
async function handleUserLogin(info) {
  try {
    const { username, password } = info;
    if (!username || !password) {
      console.log(username,password)
      throw new Error("Please add all fields");
    }

    const userExists = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    
    Password = userExists.password;

    const isValidPassword = await bcrypt.compare(info.password, Password);
    if (isValidPassword) {
      console.log(userExists)
    }
    if (userExists) {
      console.log(username, password);
    } else {
      return "error";
    }
    let payload = {
      user: {
        username: userExists.username,
      },
    };
  
    const key = jwt.sign(payload, "jwtpassword", { expiresIn: 360000 });
    
   
    return key
  } catch (error) {
    console.log(error);
  }
}

module.exports = { handleUserLogin };
