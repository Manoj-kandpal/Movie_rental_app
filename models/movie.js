const Joi = require('joi');
const mongoose = require('mongoose');
const { genreSchema } = require('./genre');

const Movie = mongoose.model('Movie',new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:5,
        maxlength:255,
        trim:true
    },
    genre:{
        type:genreSchema,
        required:true,
        min:0,
        max:255
    },
    numberInStock:{
        type:Number,
        required:true
    },
    dailyRentalRate:{
        type:Number,
        required:true,
        min:0,
        max:255
    }   
}));

function validateMovie(movie) {
    const schema = Joi.object({
        title:Joi.string().min(5).max(255).required(),
        genreId:Joi.objectId().required(),
        numberInStock:Joi.number().min(0).required(),
        dailyRentalRate:Joi.number().min(0).required()
    });
    return schema.validate(movie);
}

exports.Movie = Movie;
exports.validate = validateMovie;