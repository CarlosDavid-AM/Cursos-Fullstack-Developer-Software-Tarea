const express = require("express");
const router = express.Router();

const categoriasController = require("../controller/categoriasController");

router.get("/categorias", categoriasController.obtenerCategorias);

module.exports = router;
