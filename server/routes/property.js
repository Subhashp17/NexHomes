const express = require('express')
const router = express.Router();
const {handleAddProperty} = require('../controllers/addProperty');
const { handleDeleteProperty } = require('../controllers/deleteProperty');
const {handleUpdateProperty} = require('../controllers/updateProperty');
const {handleGetProperty} = require('../controllers/getProperty');
const {handleGetByZipCode} = require('../controllers/getByZipCode');
const middleware = require('../middleware/middleware')
var bodyParser = require('body-parser')


router.get('/',middleware,async (req,res)=>{
    const properties = await handleGetProperty(req.user);
    res.send(properties)
    
})


router.get('/zipcode' , middleware, async (req,res) =>{
   propByZip = await handleGetByZipCode(req.body)
   res.send({data: propByZip})
})

router.post('/' ,middleware, async (req,res) =>{
    console.log(req.body);
    prop = await handleAddProperty(req.body , req.user)
    console.log(prop)
    res.send({data: prop})

} )

router.delete('/' ,middleware,async (req,res) => {
    handleDeleteProperty(req.body, req.user)
})

router.put('/' ,middleware,async (req,res) => {
    handleUpdateProperty(req.body)
})

module.exports = router