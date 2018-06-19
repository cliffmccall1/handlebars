const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars').create({defaultLayout:'main'});
const app = express();

app.use(bodyParser.json());
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/beginning', (req, res) => {
    res.render('beginning')
})
app.get('/middle', (req, res) => {
    res.render('middle')
})
app.get('/end', (req, res) => {
    res.render('end')
})

app.listen('3000/beginning', () => {
    console.log('server running')
})