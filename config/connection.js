const Sequelize = require('sequelize');

const db_local = {
  database: 'minhaescolaminhavida_com_br',
  username: 'root',
  password: '', 
  dialect: 'mysql',
  host: "localhost",
  port: 3306 
};

const db_producao = {
  database: 'clube_minha_vida_mais',
  username: 'root',
  password: '', 
  dialect: 'mysql',
  host: "localhost",
  port: 3306 
};

connection = new Sequelize(db_local);
 
  /*
  teste de conexao

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  */

  module.exports  = connection