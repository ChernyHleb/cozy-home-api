const express = require('express');
const cors = require("cors");

const app = express();
var corsOptions = {
    origin: "https://localhost:3000"
};

const plantRoutes = require("./api/routes/plants");

//middleweare

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/plants', plantRoutes);

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'Hello world!'
//     });
// });  

module.exports = app; 