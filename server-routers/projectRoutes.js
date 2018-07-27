const db = require('../data/helpers/projectModel');

const express = require('express');

const router = express.Router();

function sendError(code, message, error) {
    return {
        code: code,
        message: message,
        error: error
    }
}

//endpoint for GET
router.get('/', async (req, res, next) => {
    try {
        const response = await db.get();
        res.status(200).json(response);
    } catch (error) {
        next(sendError(500, 'Projects information could not be retrieve.', error))
    }
})

//endpoint for GET with id
router.get('/:id', async(req, res, next) => {
    const id = req.params.id;
    
    try {
        const response = await db.get(id);
        res.status(200).json(response);
    } catch (error) {
        next(sendError(500, 'Project information could not be retrieve.', error))
    }
})

//endpoint for GET project actions
router.get('/:id/actions', async(req, res, next) => {
    const id = req.params.id;
    
    try {
        const response = await db.getProjectActions(id);
        if (response.length===0) {
            return next(sendError(404, "Project's actions information could not be retrieve.", "There is no project for this specified ID."))
        }

        res.status(200).json(response);
    } catch (error) {
        next(sendError(500, "Project's actions information could not be retrieve.", error.message))
    }
})

//endpoint for POST 

//endpoint for DELETE

//endpoint for UPDATE

module.exports = router;