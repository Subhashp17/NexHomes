const express = require('express')
const router = express.Router();
const {handleUserRegister} = require('../controllers/userRegister')
const bcrypt = require('bcrypt')
router.get('/', (req,res)=>{
    res.send('Hello Register');
})

router.post('/' , async (req,res)=>{
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const {username,email,password,isBuyer,isSeller} = req.body
    const info = req.body
    const newUser = handleUserRegister(info)
    return res.send(newUser);
})

module.exports = router