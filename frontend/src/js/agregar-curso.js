document.addEventListener("DOMContentLoaded", () => {
  const categoriaSelect = document.getElementById("categoria");
  const subcategoriaSelect = document.getElementById("subcategoria");
  const docenteSelect = document.getElementById("docente");
  const form = document.querySelector("form");

  const fetchCategorias = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/categorias");
      const categorias = await response.json();
      categorias.forEach((categoria) => {
        const option = document.createElement("option");
        option.value = categoria.id_categoria;
        option.textContent = categoria.nombre;
        categoriaSelect.appendChild(option);
      });
    } catch (error) {
      console.error("Error al obtener categorías:", error);
    }
  };

  const fetchDocentes = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/docentes");
      const docentes = await response.json();
      docentes.forEach((docente) => {
        const option = document.createElement("option");
        option.value = docente.id_docente;
        option.textContent = docente.nombre;
        docenteSelect.appendChild(option);
      });
    } catch (error) {
      console.error("Error al obtener docentes:", error);
    }
  };

  const fetchSubcategorias = async (id_categoria) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/subcategorias?id_categoria=${id_categoria}`
      );
      const subcategorias = await response.json();
      subcategoriaSelect.innerHTML =
        '<option selected>Seleccione una subcategoría</option>';
      subcategorias.forEach((subcategoria) => {
        const option = document.createElement("option");
        option.value = subcategoria.id_subcategoria;
        option.textContent = subcategoria.nombre;
        subcategoriaSelect.appendChild(option);
      });
    } catch (error) {
      console.error("Error al obtener subcategorías:", error);
    }
  };

  categoriaSelect.addEventListener("change", () => {
    const id_categoria = categoriaSelect.value;
    if (id_categoria) {
      fetchSubcategorias(id_categoria);
    } else {
      subcategoriaSelect.innerHTML =
        '<option selected>Seleccione una subcategoría</option>';
    }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nuevoCurso = {
      titulo: document.getElementById("titulo").value,
      descripcion: document.getElementById("descripcion").value,
      precio: document.getElementById("precio").value,
      duracion_horas: document.getElementById("duracion").value,
      id_subcategoria: subcategoriaSelect.value,
      id_docente: docenteSelect.value,
      fecha_inicio: document.getElementById("fecha_inicio").value,
      fecha_fin: document.getElementById("fecha_fin").value,
    };

    console.log("Nuevo curso a agregar:", nuevoCurso);
    alert("Revisa la consola para ver los datos del nuevo curso.");

    // Aquí irá la lógica para enviar los datos al backend
  });

  fetchCategorias();
  fetchDocentes();
});