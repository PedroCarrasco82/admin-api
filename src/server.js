'use strict';

const http = require('http');
const app = require('./app');

require ('./config/mongodb');

const PORT = process.env.PORT || 3001;

const server = http.Server(app);

// eslint-disable-next-line
server.listen(PORT, () => console.log(`Server is running on PORT =====> ${PORT}`));