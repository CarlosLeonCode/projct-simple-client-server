const config = require('./config')
const express = require('express')
const routerApp = require('./routes/index')

const app = express();

app.use(express.json());

routerApp(app);

app.listen(config.server_port, () => {
    console.log(`Running client on ${config.server_port} port!`)
})
