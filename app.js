const express = require('express');
const app = express();

const plantRoutes = require("./api/routes/plants");

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'Hello world!'
//     });
// });  

app.use('/plants', plantRoutes);

module.exports = app; 