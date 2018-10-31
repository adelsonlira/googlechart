var express = require('express');
var router = express.Router();
var model = require('./../model/despesas')();

/* GET home page. */
router.get('/', function(req, res, next) {
  model.find(null, function(err, despesas){
    if (err) {
      throw err;
    }
    res.render('index', { title: 'ToDoList - Adelson', despesas: despesas });
  }); 
});

router.post('/despesas', function(req, res, next){
  var body = req.body;
  body.status = false;
  model.create(body, function(err,despesa){
    if(err){
      throw err;
    }
    res.redirect('/');
  });
});

router.get('/turn/:id', function(req, res, next) {
  var id = req.params.id;
  model.findById(id, function(err, despesa){
    if (err){
      throw err;
    }
    despesa.status = !despesa.status;
    despesa.save(function(){
      res.redirect('/');
    });
  });
});

router.get('/remove/:id', function(req, res, next) {
  var id = req.params.id;
  model.remove({_id:id}, function(err, despesa) { 
    if (err){
      throw err;
    }
    res.redirect('/');
  });
});

module.exports = router;