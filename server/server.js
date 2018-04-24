const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

const bookCollection = [
    {
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        edition: 2,
    },

    {
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        edition: 2
    },

    {
        title: "Snow Crash",
        author: "Neal Steve",
        edition: 1.2,
        ratings: [
            { score: 5 },
            { score: 1 }
        ]
    },

    {
        title: "Catcher in the Rye",
        author: "Someone",
        edition: 1,
        ratings: [
            { score: 2 },
            { score: 5 },
            { score: 3.5 },
            { score: 4 }
        ]
    }
];

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/books', (req, res) => {
    res.send(bookCollection);
});

app.listen(PORT, () => {
    console.log(`Turnin' and Burnin' on port: ${PORT}`);
});
