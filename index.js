const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let PORT = 80;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
    PORT = 3000;
}

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// POST /aircall/calls
app.post('/aircall/calls', (req, res) => {
    if (req.body.event === 'call.created') {
        // Do something with this event
        console.log('data', req.body.data);
    }
    else {
        console.log('Event non-handled:', req.body.event);
    }

res.sendStatus(200);
});

app.listen(PORT, function () {
  console.log('App running!')
})