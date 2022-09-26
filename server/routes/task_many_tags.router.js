const express = require('express');
const TaskManyTagsService = require('../services/task_many_tags.service');

const router = express.Router();
const service = new TaskManyTagsService();

router.post('/', async (req, res) => {
  try{
    const { body } = req;
    const result = await service.create(body);
    res.json(result);
  }catch(err){
    console.error('Error')
    res.json(err)
  }
})

router.delete('/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const result = await service.delete();
    res.json(result)
  }catch(err){
    console.error('Error')
    res.json(err)
  }
})

module.exports = router;
