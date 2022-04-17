const { v4: uuidv4 } = require('uuid');

const userValidator = (req, res, next) => { 
    const uuid = uuidv4();
    req.body.data = uuid
}
module.exports = userValidator;