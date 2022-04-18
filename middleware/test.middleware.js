const { v4: uuidv4 } = require('uuid');

const userValidator = (req, res, next) => {

    if (!req.body || !req.body.input) {
        return res.status(400).json({
            path: req.originalUrl,
            success: false,
            message: 'Invalid input. add input field to body'
        });
    }

    //get type of user input in body
    const type_inp = typeof req.body.input;
    //add type of user input to res object for next handler
    res.locals = {
        message: `your input is ${type_inp} type`,
    }

    //create random uuid and pass to req.body for next handler 
    const uuid = uuidv4();
    req.body.data = uuid
    next();

}
module.exports = userValidator;