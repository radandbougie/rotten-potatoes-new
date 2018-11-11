
const express = require('express');

//extends framework
const exphbs = require('express-handlebars');

//adds body parser
const bodyParser = require('body-parser');

const methodOverride = require('method-override');

//creates an object in express
const app = express();

const mongoose = require('mongoose');

//adding comment object
const Comment = require('./models/comment');

//adds comments
const commentsController = require('./controllers/comments');

//import model object
const Review = require('./models/review');


const reviewsContoller = require('./controllers/reviews');

//create engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//sees form data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
//override with POST
app.use(methodOverride('_method'));




reviewsContoller(app);
commentsController(app);


const port = process.env.PORT || 3000;


const mongoUri =
   process.env.MONGODB_URI || "mongodb://localhost:27017/rotten-potatoes";
mongoose.connect(
   mongoUri,
   { useNewUrlParser: true }
);



app.listen(port, () => {
    console.log('App listening on port 3000')
})

module.exports = app;
