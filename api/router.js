const express = require('express');
const tb_teste = require('./controllers/tb_teste.controller');




module.exports = function (app) {

  // Initializing route groups
  const apiRoutes = express.Router()

  // tb_teste routes
  apiRoutes.post('/tb_teste', tb_teste.createtb_teste);
  apiRoutes.get('/tb_teste', tb_teste.gettb_teste);
  apiRoutes.put('/tb_teste', tb_teste.updatetb_teste);
  apiRoutes.delete('/tb_teste/:id', tb_teste.deletetb_teste);



  

  // Set url for API group routes
  app.use('/api', apiRoutes);
};
