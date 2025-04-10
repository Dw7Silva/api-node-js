const express = require('express'); 
const router = express.Router(); 

const EmpresasController = require('../controllers/Empresas'); 
const EmpresasController = require('../controllers/Empresas'); 
const EmpresasController = require('../controllers/Empresas'); 

router.get('/Empresas', EmpresasController.listarEmpresas); 
router.post('/Empresas', EmpresasController.cadastrarEmpresas); 
router.patch('/Empresas', EmpresasController.editarEmpresas); 
router.delete('/Empresas', EmpresasController.apagarEmpresas); 

router.get('/Empresas', EmpresasController.listarEmpresas); 
router.post('/Empresas', EmpresasController.cadastrarEmpresas); 
router.patch('/Empresas', EmpresasController.editarEmpresas); 
router.delete('/Empresas', EmpresasController.apagarEmpresas); 

router.get('/Empresas', EmpresasController.listarEmpresas); 
router.post('/Empresas', EmpresasController.cadastrarEmpresas); 
router.patch('/Empresas', EmpresasController.editarEmpresas); 
router.delete('/Empresas', EmpresasController.apagarEmpresas); 



module.exports = router;