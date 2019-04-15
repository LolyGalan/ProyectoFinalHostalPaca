const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const SECRET = require('../config/salt').salt; // get our config file

function verifyParam(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.params.token;
  if (!token) {
    token = req.header('x-access-token');
    if (!token)
      return res.status(403).send({ auth: false, message: 'No tenemos token' });
  }
  console.log("token: " + token)
  // verifies secret and checks exp
  jwt.verify(token, SECRET, function(err, decoded) {
    console.log("dec: " + decoded)

    if (err)
      return res.status(500).send(err);

    // if everything is good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}

function buildToken (key) {
  console.log("key:"+key);
  // create a token
  var token = jwt.sign({ id: key }, SECRET, {
    expiresIn: 86400 // expires in 24 hours
    //expiresIn: 2000000 //  expira en 20 segundos 
  });
  return token;
}

module.exports = {
    verifyParam,
  buildToken
};