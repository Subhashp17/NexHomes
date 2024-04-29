const jwt = require('jsonwebtoken');

module.exports = function (req , res,next){
  try {
    token = req.header('x-token')
    if(!token){
        return res.status(400).send('Token Not Found')
    }
    let decoded = jwt.verify(token , 'jwtpassword')
    req.user = decoded.user;
    console.log(decoded.user);
    next();
  } catch (error) {
    console.log(error);
  }
}