let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");


function cargar(item) {
    if (window.innerWidth > 600) {
    quitarBordes();
    mostrador.style.width = "55%";
    seleccion.style.width = "28%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";
}else {
    quitarBordes();
    mostrador.style.width = "100%";
    seleccion.style.width = "28%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";
}

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripcion del modelo";

    precioSeleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML
}

function cargar(item) {
    if (window.innerWidth > 991) {
    quitarBordes();
    mostrador.style.width = "55%";
    seleccion.style.width = "28%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid darkred";
}else {
    quitarBordes();
    mostrador.style.width = "100%";
    seleccion.style.width = "28%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid darkred";
}

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripcion del modelo";

    precioSeleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML
}

function quitarBordes() {
    var items = document.getElementsByClassName("item");
    for(i=2;i < items.length; i++) {
        items[i].style.border = "2px solid red";
    }
}
function cerrar() {
    mostrador.style.width = "100%";
    seleccion.style.width = "0";
    seleccion.style.opacity = "0";
    quitarBordes();
}

