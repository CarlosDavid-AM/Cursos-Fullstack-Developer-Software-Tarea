const express = require("express");
const router = express.Router();

const docentesController = require("../controller/docentesController");

router.get("/docentes", docentesController.optenerDocentes);

module.exports = router;
