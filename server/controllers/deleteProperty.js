const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function handleDeleteProperty(deleteProperty){
   
  const {property_id} = deleteProperty
  const newProperty = await prisma.Properties.delete({
        where : {
              property_id : deleteProperty.property_id
        }
        
     });
     
}
module.exports = {handleDeleteProperty,}