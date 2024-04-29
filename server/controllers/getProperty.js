const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function handleGetProperty(info){
    const {username } = info
    const user = await prisma.user.findUnique({
        where: {
          username,
        },
      });
      
      const properties = await prisma.properties.findMany({
         where:{
            seller_id : user.id
         }
      })
      return properties
    }

 module.exports = {handleGetProperty,}
