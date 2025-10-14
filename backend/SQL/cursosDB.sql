-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS cursosDB;
USE cursosDB;

-- ==========================================
-- TABLA: categorias
-- ==========================================
CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- ==========================================
-- TABLA: subcategorias
-- ==========================================
CREATE TABLE subcategorias (
    id_subcategoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

-- ==========================================
-- TABLA: docentes
-- ==========================================
CREATE TABLE docentes (
    id_docente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- ==========================================
-- TABLA: cursos
-- ==========================================
CREATE TABLE cursos (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2),
    duracion_horas INT,
    id_subcategoria INT,
    id_docente INT,
    fecha_inicio DATE,
    fecha_fin DATE,
    FOREIGN KEY (id_subcategoria) REFERENCES subcategorias(id_subcategoria),
    FOREIGN KEY (id_docente) REFERENCES docentes(id_docente)
);

-- ==========================================
-- DATOS DE PRUEBA (FAKE DATA)
-- ==========================================

-- Categorías
INSERT INTO categorias (nombre) VALUES
('Informática'),
('Matemáticas'),
('Diseño Gráfico'),
('Idiomas');

-- Subcategorías
INSERT INTO subcategorias (nombre, id_categoria) VALUES
('Lenguajes de Programación', 1),
('Redes y Seguridad', 1),
('DevOps', 1),
('Álgebra', 2),
('Cálculo', 2),
('Geometría', 2),
('Diseño Web', 3),
('Photoshop', 3),
('Illustrator', 3),
('Inglés', 4),
('Francés', 4),
('Alemán', 4);

-- Docentes
INSERT INTO docentes (nombre) VALUES
('Juan Pérez'),
('María Gómez'),
('Carlos López'),
('Ana Torres'),
('Pedro Ramírez');

-- Cursos
INSERT INTO cursos (titulo, descripcion, precio, duracion_horas, id_subcategoria, id_docente, fecha_inicio, fecha_fin) VALUES
('Curso de Java Básico', 'Aprende los fundamentos de Java desde cero.', 120.50, 40, 1, 1, '2025-02-01', '2025-03-01'),
('Curso de Python Intermedio', 'Profundiza en Python y crea proyectos prácticos.', 150.00, 45, 1, 2, '2025-03-10', '2025-04-20'),
('Curso de Redes CISCO', 'Configura routers y switches profesionales.', 200.00, 60, 2, 3, '2025-04-01', '2025-06-01'),
('Curso de DevOps con Docker', 'Aprende CI/CD, Docker y Kubernetes.', 250.00, 50, 3, 4, '2025-05-15', '2025-07-15'),
('Curso de Álgebra Básica', 'Domina las ecuaciones y expresiones algebraicas.', 90.00, 30, 4, 5, '2025-01-20', '2025-02-25'),
('Curso de Cálculo Integral', 'Aprende derivadas e integrales paso a paso.', 110.00, 35, 5, 1, '2025-02-10', '2025-03-25'),
('Curso de Geometría Analítica', 'Figuras, ángulos y coordenadas cartesianas.', 100.00, 25, 6, 2, '2025-04-01', '2025-05-15'),
('Diseño Web con HTML y CSS', 'Crea sitios web modernos desde cero.', 130.00, 40, 7, 3, '2025-05-01', '2025-06-10'),
('Photoshop para Principiantes', 'Edita fotos y domina las herramientas básicas.', 95.00, 20, 8, 4, '2025-06-15', '2025-07-15'),
('Diseño con Illustrator', 'Aprende a vectorizar y crear logos.', 105.00, 25, 9, 5, '2025-07-10', '2025-08-15'),
('Inglés Básico', 'Aprende vocabulario y gramática simple.', 80.00, 30, 10, 1, '2025-01-10', '2025-02-20'),
('Inglés Conversacional', 'Mejora tu fluidez al hablar.', 100.00, 25, 10, 2, '2025-03-05', '2025-04-10'),
('Francés desde Cero', 'Aprende lo básico del idioma francés.', 120.00, 30, 11, 3, '2025-02-15', '2025-03-25'),
('Francés Intermedio', 'Profundiza en el idioma con ejercicios prácticos.', 140.00, 35, 11, 4, '2025-04-10', '2025-05-30'),
('Alemán Básico', 'Aprende vocabulario esencial y frases comunes.', 110.00, 28, 12, 5, '2025-03-01', '2025-04-05'),
('Curso de Ciberseguridad', 'Aprende técnicas de seguridad informática.', 260.00, 50, 2, 1, '2025-06-01', '2025-08-01'),
('Backend con Spring Boot', 'Crea APIs REST seguras con Spring Boot.', 220.00, 45, 1, 2, '2025-07-01', '2025-08-15'),
('Frontend con React.js', 'Crea interfaces interactivas con React.', 200.00, 40, 7, 3, '2025-09-01', '2025-10-10'),
('Diseño UX/UI', 'Aprende a diseñar interfaces centradas en el usuario.', 150.00, 35, 7, 4, '2025-08-10', '2025-09-20'),
('Curso de Kubernetes Avanzado', 'Administra clusters y despliegues complejos.', 300.00, 55, 3, 5, '2025-10-01', '2025-12-01');

-- ==========================================
-- CONSULTA FINAL PARA VER LOS DATOS
-- ==========================================
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
ORDER BY cat.nombre, s.nombre;
