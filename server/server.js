const express = require('express');
const mongoose =require('mongoose');
const Book = require('./models/book.schema')
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({ extended: true }));

// ---- connecting to mongo start ----//
const databaseUrl = 'mongodb://localhost:27017/library';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error', error);
});
// ---- connecting to mongo end ----//

// get route for /books
app.get('/books', (req, res) => {
    //database Read/Find
    Book.find({})
        .then((dataFromDatabase) => {
            // success, good things happened
            console.log('data from database', dataFromDatabase);
            res.send(dataFromDatabase);
        })
        .catch((error) => {
            // error, bad things happened
            console.log('error with Book.find', error);
            res.sendStatus(500);
        });
});

app.listen(PORT, () => {
    console.log(`Turnin' and Burnin' on port: ${PORT}`);
});
