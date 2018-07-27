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
        next(sendError(500, "There was an error while saving action to database.", error))
    }
})

// //endpoint for DELETE
// router.delete('/:id', async (req, res, next) => {
//     const id = req.params.id;

//     try {
//         const response = await db.remove(id);
//         if (response === 0){
//             return next(sendError(404, "There was an error deleting this project.", "There is no project for this specified ID."))
//         }

//         res.status(200).json(response);
//     } catch (error) {
//         next(sendError(500, "There was an error, this project could not be removed.", error))
//     }
// })

// //endpoint for PUT
// router.put('/:id', async (req, res, next) => {
//     const id = req.params.id;
//     if ((!req.body.name && !req.body.description)) {
//         return next(sendError(400, "There was an error while updating project.", "Please provide information of project to be updated."))
//     } 

//     try {
//         const response = await db.update(id, req.body);
//         res.status(200).json(response);
//     } catch (error) {
//         next(sendError(500, "There was an error, this project could not be updated.", error))
//     }
// })

module.exports = router;