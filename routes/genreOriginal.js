const express = require('express');
const router = express.Router();
const Joi = require('joi');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vidly',)
    .then(()=> console.log('connected to database'))
    .catch(err => console.log('failed to connect to database'));

const genreSchema = mongoose.Schema({
    id:Number,
    genre:{
        type:String,
        min:3
    }
});
const Genre = mongoose.model('Genre',genreSchema);


router.get('/',(req,res) =>{
    res.send(genres)
});

router.get('/:id',(req,res) => {
    let movie = genres.find(c => c.id === parseInt(req.params.id) );
    if(!movie) return res.status(404).send('Listed id not found');
    res.send(movie);
});

router.post('/',(req,res) => {
    const { error } = validateGenre(req.body)
    if(error) return res.status(400).send(error.details[0].message);
    const movie = {
        id : genres.length + 1,
        genre : req.body.genre
    };
    genres.push(movie);
    res.send(movie);

});

router.put('/:id',(req,res) => {
    let movie = genres.find(c => c.id === parseInt(req.params.id) );
    if(!movie) return res.status(404).send('Listed id not found');

    const { error } = validateGenre(req.body)
    if(error) return res.status(400).send(error.details[0].message);
    movie.genre = req.body.genre;
    res.send(movie);
});

router.delete('/:id',(req,res) => {
    let movie = genres.find(c => c.id === parseInt(req.params.id) );
    if(!movie) return res.status(404).send('Listed id not found');

    const index = genres.indexOf(movie);
    genres.splice(index,1);

    res.send(movie);
});

function validateGenre(genre) {
    const schema = Joi.object({
        genre : Joi.string().min(3).required()
    });
    return schema.validate(genre);
}

async function getgenre(num){{
    const genre = await Genre.find({id:num});
    return genre;
}


module.exports = router