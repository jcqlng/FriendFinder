const express = require('express');
const path = require('path');
const routes = require('./app/routes');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('app/public'));

app.use('/', routes);

app.listen(port, function(){
    console.log(`Listening on port ${port}!`)
}