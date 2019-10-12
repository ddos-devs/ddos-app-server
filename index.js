const express = require('express');
const path = require('path');
const request = require('request');
const app = express();
const port = 3001;

app.get('/newsletter', (req, res) => {

    request('https://cdn.forms-content.sg-form.com/2a9b218c-e072-11e9-bae4-aa9125e90ff8',{}, (err, response, body) => {
        console.log(body);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(body)
    });
});

app.use('/static', express.static(path.join(__dirname, 'images')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));