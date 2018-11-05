var express = require('express');
var app = express();


//step one
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// OUR MOCK ARRAY OF PROJECTS
let reviews = [
  { title: "Great Review", movieTitle: "Batman II" },
  { title: "Awesome Movie", movieTitle: "Titanic" }
]

// INDEX
app.get('/', (req, res) => {
  Review.find()
    .then(reviews => {
      res.render('reviews-index', { reviews: reviews });
    })
    .catch(err => {
      console.log(err);
    })
})

// SHOW
app.get('/posts/:id', (req, res) => {

});

// NEW
app.get('/posts/new', function(req, res){

});

// CREATE
app.post('/posts', function(req, res){

});

// EDIT
app.get('/posts/:id/edit', function(req, res){

});

// UPDATE
app.put('/posts/:id', function(req, res){

});

// DESTROY
app.delete('/posts/:id', function(req, res){

//adding mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes');

//making a model
const Review = mongoose.model('Review', {
  title: String,
  movieTitle: String
});

app.listen(3000);
