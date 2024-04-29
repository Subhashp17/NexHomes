const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function handleUpdateProperty(updateProperty){
    const {property_id, ...updateBody} = updateProperty
   console.log(updateProperty)
    const updatedProperty = await prisma.Properties.update({
        where : {
              property_id : updateProperty.property_id
        },
        data : updateBody
        
     });
     
}
module.exports = {handleUpdateProperty,}