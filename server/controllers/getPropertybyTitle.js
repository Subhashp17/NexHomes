const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getPropertyByTitle(info){
    
    const property = await prisma.Properties.findUnique({
        where: {
          title : info.title,
        },
      });
      return property
    }  

 module.exports = {getPropertyByTitle,}
