//Selecciono:
const cruz = document.querySelector(".hamburger");

//Función:

cruz.onclick = () => {
  cruz.classList.toggle("is-active");

    const menu = document.querySelector(".hamburger-open")

    menu.classList.toggle("is_active")
}

//Botones Proyectos:

const botonesFiltros = document.querySelectorAll('.proyecto-boton')
console.log(botonesFiltros)
const projectsCards = document.querySelectorAll('.card-project')
console.log(projectsCards)

for (let buttonFilter of botonesFiltros) {
    buttonFilter.onclick = () => {
        filterCards(buttonFilter)
    }
}

const filterCards = (buttonFilter) => {
    const filterCategory = buttonFilter.value
    console.log(filterCategory)

    for (let projectCard of projectsCards) {
        const cardCategory = projectCard.dataset.category
        console.log(cardCategory)
        if (cardCategory == filterCategory || filterCategory == "todos"){
            console.log(cardCategory == filterCategory)
           projectCard.classList.remove("hidden")
        }  
     else {
        projectCard.classList.add("hidden")
        }

}
}
