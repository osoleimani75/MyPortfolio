var express = require('express');
const PORT = process.env.PORT || 3002;
var exphbs  = require('express-handlebars');
const path = require("path");
var app = express();

app.use(express.static("Public"));

const hbs = exphbs.create({
    defaultLayout: 'masterPage',
    layoutsDir   : path.join(__dirname, '/views'),
    helpers      : path.join(__dirname, '/Public/helpers'),
    partialsDir  : path.join(__dirname, '/views/Partials')
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('layouts/home');
});

app.get('/experience', function (req, res) {
    res.render('layouts/experience');
});
app.get('/contact', function (req, res) {
    res.render('layouts/contact');
});



app.listen(PORT,()=>{
      console.log(`App now listening at localhost:${PORT}`);
});
