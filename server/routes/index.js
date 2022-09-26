const express = require('express')
const tasksRouter = require('./tasks.router');
const TagsRouter = require('./tags.router')
const TaskManyTagsService = require('./task_many_tags.router');

function routerApp(app) {
    const router = express.Router();

    router.use('/tasks', tasksRouter);
    router.use('/tags', TagsRouter);
    router.use('/task_tags', TaskManyTagsService);

    app.use('/api/v1', router);
}

module.exports = routerApp;
