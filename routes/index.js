var express = require('express');
var router = express.Router();
var connection = require('../config/connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  var Logradouro = require('../models/logradouro');

  var Sequelize = require('sequelize');

  $objlogradouro = Logradouro(connection, Sequelize.DataTypes);

  var primeiro = $objlogradouro.findAll({
    where: {
      cep: '20715270'
    }
  }).then(log => { 
  });
  console.log(primeiro);

  res.render('index', { title: 'Express' });
});

module.exports = router;
