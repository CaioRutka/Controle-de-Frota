const express = require('express')
const multer = require('multer');

const LojaController = require('./controllers/LojaController');
const CidadaoController = require('./controllers/CidadaoController');
const FronteiraController = require('./controllers/FronteiraController');

const routes = new express.Router();
const upload = multer();

// LOJA
routes.get('/loja', LojaController.index);
routes.post('/loja/login', upload.single(), LojaController.login);
routes.post('/loja', upload.single(), LojaController.store);

// FRONTEIRA
routes.get('/fronteira', FronteiraController.index);
routes.post('/fronteira/login', upload.single(), FronteiraController.login);
routes.post('/fronteira', upload.single(), FronteiraController.store);

// CIDADOES
routes.get('/cidadao', CidadaoController.index);
routes.post('/cidadao', upload.single(), CidadaoController.store);
routes.post('/cidadao/:code/updatetemperature', upload.single(), CidadaoController.updatetemperature);
routes.post('/cidadao/findCidadaoByCode', upload.single(), CidadaoController.findCidadaoByCodeAndUpdate);
routes.post('/cidadao/departure', upload.single(), CidadaoController.departure);

module.exports = routes;
