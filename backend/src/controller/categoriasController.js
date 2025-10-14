const db = require("../config/db");

exports.obtenerClientes = async (req, res) => {
  const sql = "SELECT id_categoria, nombre FROM categorias";

  try {
    const [rows] = await db.query(sql);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    res.status(500).json({ error: "Error al obtener categorías" });
  }
};
