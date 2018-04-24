const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true, unique: true },
    author: {type: String, required: true, }
});

// mongoose, use the book collection
// mongoose automatically pluralizes, which means book = books 
module.exports = mongoose.model('book', bookSchema);