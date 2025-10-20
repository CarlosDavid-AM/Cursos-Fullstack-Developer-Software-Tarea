const express = require("express");
const cors = require("cors");
const path = require("path");

// Routers
const categoriasRouter = require("./routes/categoriasRouter");
const subcategoriasRouter = require("./routes/subCategoriasRouter");
const docentesRouter = require("./routes/docentesRouter");
const cursosRouter = require("./routes/cursosRouter");

const app = express();
const PORT = process.env.PORT || 3001;

// Cors
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, HEAD, PUT, PATCH, DELETE",
    credentials: true,
  })
);

// Servir archivos estáticos de frontend
app.use(express.static(path.join(__dirname, "../../frontend/src")));

// Rutas para servir archivos HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/src/index.html'));
});

app.get('/agregar-curso', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/src/pages/agregar-curso.html'));
});

// Endpoints
const basePath = "/api";

app.use(basePath, categoriasRouter);
app.use(basePath, subcategoriasRouter);
app.use(basePath, docentesRouter);
app.use(basePath, cursosRouter);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
