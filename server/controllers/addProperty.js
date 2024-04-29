const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function handleAddProperty(addProperty ,user){
    const {title,description,price,Address,zipcode,details_beds,details_bath,status } = addProperty
    const{username} = user

    const seller = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    console.log(seller)

    console.log(addProperty)
    const newProperty = await prisma.Properties.create({
          data:{title,description,price,Address,zipcode,details_beds,details_bath,status ,seller_id : seller.id}
    });

     console.log(newProperty) 

      return newProperty
  }
     
module.exports = {handleAddProperty,}