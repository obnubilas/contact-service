var express = require('express');
var router = express.Router();
var social = require('../services/fakeservice');

var contacts = [
  {"name": "peter", "phone": 12345},
  {"name": "john", "phone": 65432}
]

/* GET users listing. */
router.get('/', function(req, res, next) { //este es el raiz de users y devuelve esto
  res.send(contacts); //responde con un mensaje al poner el url/users
});


/* POST contact. */
router.post('/', function(req, res, next) { //este es el raiz de users y devuelve esto
  var contact = req.body;
  contacts.push(contact);
  res.sendStatus(201); //resultado mandar
});

//GET contact/id
router.get('/:name', async function(req, res, next){
  var name = req.params.name;
  var result = contacts.find(c => {
    console.log(u.id)
    return c.id===name;
  } );

  var social = await fakesocial.getSocial(id);

  if(result){
    res.send({ 
      ...result,
      "social":social
    });
  }else{
    console.log(id)
    res.sendStatus(404);
  }
})

module.exports = router;



// las peticiones van siendo regustradas en el terminal, con los get, etc
