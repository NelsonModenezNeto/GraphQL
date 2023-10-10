const knex = require("knex")({
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "seu_usuario",
      password: "sua_senha",
      database: "seu_banco_de_dados",
      port: 3306, 
    },
  });
  
  module.exports = knex;
  