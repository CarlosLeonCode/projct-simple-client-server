const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        res.send('Hello get!');
    }catch(err){
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const { id } = req.params;
        res.send('hello get id');
    }catch(err){
    }
})

router.post('/', async (req, res, next) => {
    try{
        const { body } = req;
        res.send('hello post');
    }catch(err){

    }
})

router.patch('/:id', async (req, res, next) => {
    try{
        const { body } = req;
        res.send('hi patch!');
    }catch(err){

    }
})

router.delete('/:id', async (req, res, next) => {
    try{
        const { id } = req.params
        res.send(`delete ${id}`)
    }catch(err){

    }
})

module.exports = router;
