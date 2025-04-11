const express = require('express'); 
const router = express.Router(); 

const EmpresasController = require('../controllers/Empresas'); 
const DemandasController = require('../controllers/Demandas'); 
const PropostasController = require('../controllers/Propostas'); 

router.get('/empresas', EmpresasController.listarEmpresas); 
router.post('/empresas', EmpresasController.cadastrarEmpresas); 
router.patch('/empresas', EmpresasController.editarEmpresas); 
router.delete('/empresas', EmpresasController.apagarEmpresas); 

router.get('/demandas', DemandasController.listarDemandas); 
router.post('/demandas', DemandasController.cadastrarDemandas); 
router.patch('/demandas', DemandasController.editarDemandas); 
router.delete('/demandas', DemandasController.apagarDemandas); 

router.get('/propostas', PropostasController.listarPropostas); 
router.post('/propostas', PropostasController.cadastrarPropostas); 
router.patch('/propostas', PropostasController.editarPropostas); 
router.delete('/propostas', PropostasController.apagarPropostas);



module.exports = router;