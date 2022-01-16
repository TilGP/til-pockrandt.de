const express = require('express');
const res = require('express/lib/response');
const app = express();

app.set('view-engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(3000);