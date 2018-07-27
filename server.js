const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const projectRoutes = require('./server-routers/projectRoutes');
const actionRoutes = require('./server-routers/actionRoutes');

//create server
server = express();

//middleware
server.use(express.json());
server.use(helmet());
server.use(cors({ origin: 'http://localhost:3000'}));

//Routes
server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);

//Error handler
server.use((err, req, res, next) => {
    res.status(err.code).send({message: err.message, error: err.error})
})

//start server
server.listen(8000, () => console.log('=== API Running... ==='));