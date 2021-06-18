const express = require('express');
const router = express.Router();


router.get('/',(req,res) => {
    res.send('Welcome to Vidly movies renting website');
});

module.exports = router