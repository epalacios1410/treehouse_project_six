//require express
const express = require('express');
//router
const router = express.Router();

//require my data.json file
const {projects} = require('../data/data.json');


//set up an index route -> Home pages
router.get('/', (req, res) => {
  //data object has defined variables for the view
  res.render('index', {projects}); //passing on data to the template index.pug
});

//set up "about" route
router.get('/about', (req, res) => {
  res.render('about');
});

//set up "project" route
router.get('/project/:id', (req, res, next) => {
  const projectNum = parseInt(req.params.id); //holds specified project requested in the url
  const project = projects.find( ({ id }) => id === +projectNum );
  if (project) { //if valid project id is requested
      res.render('project', {project});
  } else {
      res.send('Incorrect project ID. Please try again.');
  }
});



//export the module
module.exports = router;
