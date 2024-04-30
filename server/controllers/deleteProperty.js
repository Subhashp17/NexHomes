const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function handleDeleteProperty(deleteProperty){
   
  const {title} = deleteProperty
  const newProperty = await prisma.Properties.delete({
        where : {
              title: deleteProperty.title
        }
        
     });
     
}
module.exports = {handleDeleteProperty,}