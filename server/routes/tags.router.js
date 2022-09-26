const express = require('express');
const TagsService = require('../services/tags.service');

const router = express.Router();
const service = new TagsService();

router.get('/', async (req, res) => {
  try{
    const tags = await service.find();
    res.json(tags);
  }catch(err){
    console.error('Error')
    res.json(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try{
    const { id } = req.params;
    const tag = await service.findOne(id);
    res.json(tag);
  }catch(err){
    console.error('Error')
    res.json(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    const { body } = req;
    const tag = await service.create(body)
    res.json(tag);
  }catch(err){
    console.error('Error')
    console.error(err)
    res.json(err)
  }
})

router.patch('/:id', async (req, res, next) => {
  try{
    const { body } = req;
    const { id } = req.params;
    const tag = await service.update(id, body);
    res.json(tag);
  }catch(err){
    console.error('Error')
    console.error(err)
    res.json(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try{
    const { id } = req.params;
    const response = await service.delete(id)
    res.json(response)
  }catch(err){
    console.error('Error')
    console.error(err)
    res.json(err)
  }
})

module.exports = router;
