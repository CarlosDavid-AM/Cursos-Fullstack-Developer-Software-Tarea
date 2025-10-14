const getCategorias = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/categorias");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  getCategorias();
});
