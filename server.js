const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const { appendFile } = require('fs');

const app = express();

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(`listem on port: ${port}`)
})