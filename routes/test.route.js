"use strict";

const express = require('express');
const router = express.Router();
const testMiddleware = require('../middleware/test.middleware.js');
const { logParam } = require('../controller/test.controller.js');

router.use(testMiddleware);

router.route('/')
    .post(logParam);

module.exports = router;