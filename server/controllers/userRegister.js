const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();
async function handleUserRegister(info) {
  try {
    const { username, email, password, isBuyer, isSeller } = info;
    if (!username || !email || !password) {
      throw new Error("Please add all fields");
    }

    const exist = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (exist) {
      throw new Error("User Exists");
    }
    const newUser = await prisma.user.create({
      data: info,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { handleUserRegister };
