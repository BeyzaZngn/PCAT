const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db')

//create schema
const PhotoSchema = new Schema({
    title: String,
    description: String
})

const Photo = mongoose.model('Photo', PhotoSchema)

//create a photo
Photo.create({
    title: "Photo Title 1",
    description: "Photo description 1 lorem ipsum"

})
