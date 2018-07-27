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
            return next(sendError(404, "There was an error retrieving project information.", "There is no project for this specified ID."))
        }

        res.status(200).json(response);
    } catch (error) {
        next(sendError(500, "Project's actions information could not be retrieve.", error.message))
    }
})

//endpoint for POST 
router.post('/', async (req, res, next) => {
    if (!(req.body.name && req.body.description)) {
        return next(sendError(400, "There was an error while saving project to database.", "Please provide both name and description of project."))
    }

    try {
        const response = await db.insert(req.body);
        res.status(200).json(response);
    } catch (error) {
        next(sendError(500, "There was an error while saving project to database.", error))
    }
})

//endpoint for DELETE

//endpoint for UPDATE

module.exports = router;