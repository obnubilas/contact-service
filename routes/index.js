var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { //este es el get raíz, va a renderizar el archivo index.html
  res.render('index', { title: 'Express' }); 
});

module.exports = router;

//con npm install cargo todas las dependencias
//con npm start da información de la depuración