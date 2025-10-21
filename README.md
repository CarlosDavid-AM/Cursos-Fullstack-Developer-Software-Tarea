# Cursos Fullstack Developer Software

Monorepositorio multipaquete

## 🚀 Requisitos Previos

- Node.js (v16 o superior)
- npm
- MySQL (o el gestor de base de datos que uses)
- Herramienta para pruebas de API: [Postman](https://www.postman.com/) o [Thunder Client](https://www.thunderclient.com/)

## 📦 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/CarlosDavid-AM/Cursos-Fullstack-Developer-Software-Tarea.git
cd Cursos-Fullstack-Developer-Software-Tarea
```

### 2. Restaurar la Base de Datos

- Dirígete a la carpeta `sql` y ejecuta el script SQL correspondiente en tu gestor de base de datos para crear las tablas y datos iniciales.

### 3. Instalar dependencias

Desde la raíz del proyecto, ejecuta:

```bash
npm install
```

### 4. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido (ajusta según tu entorno):

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_DATABASE=cursosDB
DB_PORT=3306
PORT=3000
```

### 5. Ejecutar el servidor

Para desarrollo:

```bash
npm run dev
```

Para producción:

```bash
npm start
```

El servidor estará disponible en `http://localhost:3001`.

## 📂 Estructura del Proyecto

```
.
├── docs/           # Documentación de la API y ejemplos de uso
├── sql/            # Scripts para la base de datos
├── src/            # Código fuente principal (backend)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
├── package.json
└── README.md
```
