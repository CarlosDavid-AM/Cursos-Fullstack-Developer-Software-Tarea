const express = require("express");
const cors = require("cors");
const path = require("path");

// Routers
const categoriasRouter = require("./routes/categoriasRouter");
const subcategoriasRouter = require("./routes/subCategoriasRouter");
const docentesRouter = require("./routes/docentesRouter");

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

// Endpoints
const basePath = "/api";

app.use(basePath, categoriasRouter);
app.use(basePath, subcategoriasRouter);
app.use(basePath, docentesRouter);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
