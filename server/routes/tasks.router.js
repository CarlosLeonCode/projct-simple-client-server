const express = require('express');
const TasksService = require('../services/tasks.service');
const router = express.Router();

const service = new TasksService();

router.get('/', async (req, res) => {
  try{
    const tasks = await service.find();
    res.json(tasks);
  }catch(err){
    console.error('Error')
    res.json(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try{
    const { id } = req.params;
    const task = await service.findOne(id);
    res.json(task);
  }catch(err){
    console.error('Error')
    res.json(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    const { body } = req;
    const task = await service.create(body)
    res.json(task);
  }catch(err){
    console.error('Error')
    res.json(err)
  }
})

router.patch('/:id', async (req, res, next) => {
  try{
    const { body } = req;
    const { id } = req.params;
    const task = await service.update(id, body)
    res.json(task);
  }catch(err){
    console.error('Error')
    res.json(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try{
    const { id } = req.params
    await service.delete(id)
    res.json({
      response: `Task delete it, id -> ${id}`
    })
  }catch(err){
    console.error('Error')
    console.error(err)
    res.json(err)
  }
})

module.exports = router;
