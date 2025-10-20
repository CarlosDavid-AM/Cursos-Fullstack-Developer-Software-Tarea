const db = require("../config/db");

exports.obtenerCursos = async (req, res) => {
  const sql = `
    SELECT 
      c.id_curso,
      c.titulo,
      c.descripcion,
      c.precio,
      c.duracion_horas,
      s.nombre AS subcategoria,
      cat.nombre AS categoria,
      d.nombre AS docente,
      c.fecha_inicio,
      c.fecha_fin
    FROM cursos c
    INNER JOIN subcategorias s ON c.id_subcategoria = s.id_subcategoria
    INNER JOIN categorias cat ON s.id_categoria = cat.id_categoria
    INNER JOIN docentes d ON c.id_docente = d.id_docente
  `;

  try {
    const [rows] = await db.query(sql);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error al obtener cursos:", error);
    res.status(500).json({ error: "Error al obtener cursos" });
  }
};
