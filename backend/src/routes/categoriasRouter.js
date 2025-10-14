const express = require("express");
const router = express.Router();

const categoriasController = require("../controller/categoriasController");

router.get("/", categoriasController.obtenerClientes);

module.exports = router;
