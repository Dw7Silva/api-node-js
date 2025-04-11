const express = require('express'); 
const router = express.Router(); 

const EmpresasController = require('../controllers/Empresas'); 
const EmpresasController = require('../controllers/Demandas'); 
const EmpresasController = require('../controllers/Propostas'); 

router.get('/Empresas', EmpresasController.listarEmpresas); 
router.post('/Empresas', EmpresasController.cadastrarEmpresas); 
router.patch('/Empresas', EmpresasController.editarEmpresas); 
router.delete('/Empresas', EmpresasController.apagarEmpresas); 

router.get('/Demandas', DemandasController.listarDemandas); 
router.post('/Demandas', DemandasController.cadastrarDemandas); 
router.patch('/Demandas', DemandasController.editarDemandas); 
router.delete('/Demandas', DemandasController.apagarDemandas); 

router.get('/Propostas', PropostasController.listarPropostas); 
router.post('/Propostas', PropostasController.cadastrarPropostas); 
router.patch('/Propostas', PropostasController.editarPropostas); 
router.delete('/Propostas', PropostasController.apagarPropostas);



module.exports = router;