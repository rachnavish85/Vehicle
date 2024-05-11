const {model, Schema} = require('../connection');

const mySchema = new Schema({
    title: String,
    model: String,
    information: String,
    detail: String,
    image: String
});

module.exports = model('recipe', mySchema);