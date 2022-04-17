const express = require('express');
const router = express.Router();

//Junction Box
const testRouter = require('./test.route.js');

//route and address 
router.use('/test', testRouter);

module.exports = router;