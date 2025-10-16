const express = require("express");
const router = express.Router();

const cursosController = require("../controller/cursosController");

router.get("/cursos", cursosController.obtenerCursos);

module.exports = router;
