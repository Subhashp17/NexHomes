const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function handleGetByZipCode(info){
    const {zipcode } = info
    const property = await prisma.properties.findMany({
        where: {
          zipcode,
        },
      });

      if(property){
        console.log(property)
      }

      
 }

 module.exports = {handleGetByZipCode,}
