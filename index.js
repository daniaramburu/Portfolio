//Selecciono:
const cruz = document.querySelector(".hamburger");

//Función:

cruz.onclick = () => {
  cruz.classList.toggle("is-active");

  const menu = document.querySelector(".hamburger-open");

  menu.classList.toggle("is_active");
}

