const express = require('express');
const knex = require('../data/dbConfig.js');
const accountRouter = require('../accounts/account-router');
 
const server = express();
const port = process.env.PORT || 5000
 
server.use(express.json());
server.use('/api/accounts', accountRouter);
 
// server.use((err, req, res, next) => {
//     console.log(err)
//     res.status(500).json({
//         message: "Check again, Try Harder",
//     })
// })
 
module.exports = server;
