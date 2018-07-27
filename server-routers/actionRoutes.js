const db = require('../data/helpers/actionModel');

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
        next(sendError(500, 'Actions information could not be retrieve.', error.message))
    }
})

//endpoint for GET with id
router.get('/:id', async(req, res, next) => {
    const id = req.params.id;
    
    try {
        const response = await db.get(id);
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        next(sendError(500, 'Action information could not be retrieve.', error.message))
    }
})

//endpoint for POST 
router.post('/', async (req, res, next) => {
    if (!(req.body.notes && req.body.description && req.body.project_id)) {
        return next(sendError(400, "There was an error while saving action to database.", "Please provide project ID, notes, and description of action."))
    }

    try {
        const response = await db.insert(req.body);
        res.status(200).json(response);
    } catch (error) {
        next(sendError(500, "There was an error while saving action to database.", error.message))
    }
})

//endpoint for DELETE
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const action = await db.get(id);
        await db.remove(id);
        res.status(200).json(action);
    } catch (error) {
        next(sendError(500, "There was an error, this action could not be removed.", error.message))
    }
})

//endpoint for PUT
router.put('/:id', async (req, res, next) => {
    const id = req.params.id;
    if ((!req.body.description && !req.body.notes && !req.body.project_id)) {
        return next(sendError(400, "There was an error while updating action.", "Please provide information of action to be updated."))
    } 

    try {
        const response = await db.update(id, req.body);
        res.status(200).json(response);
    } catch (error) {
        next(sendError(500, "There was an error, this action could not be updated.", error.message))
    }
})

module.exports = router;