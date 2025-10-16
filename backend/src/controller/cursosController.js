const db = require("../config/db");

exports.obtenerCursos = async (req, res) => {
  const sql =
    "SELECT id_curso, titulo, descripcion, precio, duracion_horas, id_subcategoria, id_docente, fecha_inicio, fecha_fin FROM cursos";

  try {
    const [rows] = await db.query(sql);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error al obtener cursos:", error);
    res.status(500).json({ error: "Error al obtener cursos" });
  }
};
