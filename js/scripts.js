//import { anuncio_autos } from "./entidades.js";
import { update, create, getById, deleteItem } from "./crud.js";
import { crearTabla, itemClicked } from "./table.js";
import { refresh, clean } from "./form.js";

let form = document.forms[0];

let btnGuardar = document.getElementById("btnGuardar");
let btnEliminar = document.getElementById("btnEliminar");
let btnModificar = document.getElementById("btnModificar");
let btnCancelar = document.getElementById("btnCancelar");

window.addEventListener("load", tabla); //Cada vez que se cargue la pag html actualiza la tabla
form.addEventListener("submit", (e) => {
  //Cancelo el submit del boton
  e.preventDefault();
});

let divTabla = document.getElementById("divTabla");

divTabla.addEventListener("click", () => {
  refreshForm();
  btnModificar.style.display = "block";
  btnEliminar.style.display = "block";
  btnCancelar.style.display = "block";
});

btnGuardar.addEventListener("click", crear);
btnEliminar.addEventListener("click", baja);
btnModificar.addEventListener("click", modifica);

btnCancelar.addEventListener("click", () => {
  clean();
  btnModificar.style.display = "none";
  btnEliminar.style.display = "none";
  btnCancelar.style.display = "none";
});


function baja() {
  deleteItem(itemClicked);
  actualizarLista();
  clean();

  //tabla();
}
function refreshForm() {
  
  refresh(getById(itemClicked));
}
function crear() {
  create();
  divTabla.innerHTML = "";
  actualizarLista();
  //tabla();
  clean();
}

function tabla() {
  crearTabla(getData());
}

function modifica() {
  update(itemClicked);
  //divTabla.innerHTML = "";
  actualizarLista();
  clean();
  //tabla();
}

function actualizarLista() {
  let divTabla = document.getElementById('divTabla');
  divTabla.innerHTML = "";
  let img;
  img = document.createElement("img");
  img.setAttribute("src", "./image/loader.gif");
  img.setAttribute("alt", "Gif del Loader");
  img.setAttribute("id", "spinner");
  divTabla.appendChild(img);
  setTimeout(() => {
    divTabla.innerHTML = "";
    tabla();
  },3000);
}
function getData() {
  return JSON.parse(localStorage.getItem("anuncio_autos")) || [];
}


