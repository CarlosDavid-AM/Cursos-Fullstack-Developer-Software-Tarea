const db = require("../config/db");

exports.optenerDocentes = async (req, res) => {
  const sql = "SELECT id_docente, nombre FROM docentes;";

  try {
    const [rows] = await db.query(sql);
    res.status(200).json(rows);
  } catch (error) {
    console.log("Error al obtener docentes:", error);
    res.status(500).json({ error: "Error al obtener docentes" });
  }
};
