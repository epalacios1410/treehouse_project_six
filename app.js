
/*
SETTING UP DEPENDENCIES
*/

//require express
const express = require('express');
//create an express application by calling express which returns an express application
const app = express();
//require "routes" folder
const routes = require('./routes');
app.use(routes);


/*
SETTING UP MIDDLEWARE
*/


//use a static route and the express.static method to serve the static files
app.use('/static', express.static('public'));

//set view engine to pug
app.set('view engine', 'pug');
//set a static route to serve my public files
app.use('/satic', express.static('public'));

app.use(routes);


//errors
//Log out a user friendly message to the console
app.use((req, res, next) => {
  const err = new Error('This page is does not exist. Try a different URL.');
  err.status = 404; //give the error appropriate status code
  next(err); //use next to pass the error to the next middleware
});

app.use((err, req, res, next) => {
  console.log('Error: Enter a valid project ID');
  //set the status of the response
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});


app.listen(3000, () => {
  console.log('the application is running localhost:3000');
});
