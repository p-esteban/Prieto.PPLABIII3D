

// ESTA ES LA LLAMADA AL METODO
/* const divInfo = document.getElementById("info");

divInfo.appendChild(crearLista(autos)); */

// crea ul con todos los li
function crearLista(vec){

    const lista = document.createElement('ul');
    
    vec.forEach(element => {
       const item = document.createElement('li');
       const texto = document.createTextNode(element.marca);// cambiar atributo marca
       item.appendChild(texto);
       lista.appendChild(item);
    });
}