const express = require('express');
const app = express();
require('dotenv').config(); 
const mongoose = require('mongoose');
const expressError = require('./utils/ExpressError');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const dbURL = process.env.DB_URL;
mongoose.connect(dbURL);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));


app.use(cors({credentials: true, origin: true}));
app.use(cookieParser(`${process.env.SECRET}`));
app.use(express.json());


const user = require('./routes/userRoutes');
app.use('/user', user);







app.all("*", (req, res, next) => {
    next(new expressError('page not found', 404));
})


app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if(!err.message) err.message = "Something went wrong"
    res.status(statusCode).send({error: err.message});
})



app.listen(1000, () => {
    console.log('Server is running on port 1000');
});