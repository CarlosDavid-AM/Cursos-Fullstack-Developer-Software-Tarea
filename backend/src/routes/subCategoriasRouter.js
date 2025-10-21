const express = require("express");
const router = express.Router();

const subCategoriasController = require("../controller/subCategoriasController");

// Ruta para obtener subcategorías de una categoría específica
router.get(
  "/subcategorias",
  subCategoriasController.obtenerSubCategorias
);

module.exports = router;
