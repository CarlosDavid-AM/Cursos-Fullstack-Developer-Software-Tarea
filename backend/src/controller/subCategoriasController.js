const db = require("../config/db");

exports.obtenerSubCategorias = async (req, res) => {
  const sql =
    "SELECT id_subcategoria, nombre FROM subcategorias WHERE id_categoria = ?";
  const { id_categoria } = req.query;

  try {
    const [rows] = await db.query(sql, [id_categoria]);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error al obtener subcategorías:", error);
    res.status(500).json({ error: "Error al obtener subcategorías" });
  }
};
