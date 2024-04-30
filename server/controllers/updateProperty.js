const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function handleUpdateProperty(updateProperty){
    
    const updatesProperty = await prisma.Properties.findUnique({
        where : {
              title : updateProperty.title
        },
    });

    const {property_id,title,seller_id, ...updateBody} = updateProperty
    
   console.log(updateBody)
    const updatedProperty = await prisma.Properties.update({
        where : {
            title : updateProperty.title
        },
        
        data : updateBody
        
     });
     
     console.log(updatedProperty)
    return updatedProperty;
     
}
module.exports = {handleUpdateProperty,}