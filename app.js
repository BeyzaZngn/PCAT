const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({extended:true})) 
app.use(express.json())

//ROUTES
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/photos', (req, res) => {
  console.log(req.body);
  res.redirect('/')
});


const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});
