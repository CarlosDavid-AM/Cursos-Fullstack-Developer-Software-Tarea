document.addEventListener("DOMContentLoaded", () => {
  getCursos();
});

const getCursos = async () => {
  const cursosContainer = document.getElementById("cursos-container");

  try {
    const response = await fetch("http://localhost:3001/api/cursos");
    const data = await response.json();
    
    data.forEach(curso => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${curso.titulo}</h5>
          <p class="card-text">${curso.descripcion}</p>
          <p class="card-text"><strong>Precio:</strong> ${curso.precio}</p>
          <p class="card-text"><strong>Duración:</strong> ${curso.duracion_horas} horas</p>
          <p class="card-text"><strong>Docente:</strong> ${curso.docente}</p>
        </div>
      `;

      cursosContainer.appendChild(card);
    });

  } catch (error) {
    console.error(error);
  }
};
