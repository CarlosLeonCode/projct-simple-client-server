const express = require('express')
const tasksRouter = require('./tasks.router');
const TagsRouter = require('./tags.router')

function routerApp(app) {
    const router = express.Router();

    router.use('/tasks', tasksRouter);
    router.use('/tags', TagsRouter);

    app.use('/api/v1', router);
}

module.exports = routerApp;
