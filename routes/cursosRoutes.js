const express = require("express");
const router = express.Router();
const cursosController = require('../controllers/cursosControllers.js')

router.get("/",cursosController.consultar);

router.post("/",cursosController.ingresar);
router.post("/registrarEstudiante",cursosController.asociarEstudiante);

router.route("/:id")
    .get(cursosController.consultarDetalle)
    .put(cursosController.actualizar)
    .delete(cursosController.borrar);

module.exports = router;