const express = require('express');
const cors = require('cors');

//create server
server = express();

//middleware
server.use(express.json());

//start server
server.listen(8000, () => console.log('=== API Running... ==='));