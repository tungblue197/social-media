const express = require('express');
const bodyParser = require('body-parser');
const mainRouter = require('./routers');
require('dotenv').config();

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/',mainRouter);

app.get('/', (req, res, next) => {
    res.send("index")
})


app.use((req, res, next) => {
    const error = new Error();
    error.message = "not found page!";
    next(error)
})
app.use((error, req, res) => {
    const status = error.status || 500;
    res.status(status).json({
        error: {
            message:error.message
        }
    })
    return;
})



app.listen(process.env.APP_PORT || 3001);