const db = require('../data/helpers/projectModel');

const express = require('express');

const router = express.Router();

function sendError(code, message, error) {
    return {
        code: code,
        message: message,
        error: error.message
    }
}

//endpoint for projects GET
router.get('/', async (req, res, next) => {
    try {
        const response = await db.get();
        res.status(200).json(response);
    } catch (error) {
        next(sendError(500, 'Projects information could not be retrieve.', error))
    }
})

module.exports = router;