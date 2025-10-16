const express = require("express");
const cors = require("cors");
const path = require("path");

// Routers
const categoriasRouter = require("./routes/categoriasRouter");
const subcategoriasRouter = require("./routes/subCategoriasRouter");

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
app.use("/api", categoriasRouter);
app.use("/api", subcategoriasRouter);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
