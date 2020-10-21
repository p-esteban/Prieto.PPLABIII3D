import { Anuncio_Auto } from "./entidades.js";
import { getInput } from "./form.js";

let lastId;

export function update(id) {
  const list = read();
  const values = getInput();
  let i = 0;
  for (const item of list) {
    if (item.id == id) {
      for (const key in item) {
        
        if (item.hasOwnProperty(key) && key != "id" &&  key != "active") {
         
          item[key] = values[i];
          i++;
        }
       
      }
    }
  }
  lastId = getId();
  localStorage.clear();
  save("lastId", lastId);
  save("anuncio_autos", list);
}

export function getById(id) {
  const list = read();
  let i = 0;
  for (const item of list) {
    if (item.id == id) {
      return item;
    }
  }
}
export function deleteItem(id) {
  const list = read();
  for (const item of list) {
    
    if (item.id == id) {
      
      item.active = false;
      
    }
  }
  lastId = getId();
  localStorage.clear();
  save("lastId", lastId);
  save("anuncio_autos", list);
}

export function create() {
  //OBETENGO LOS DATOS DEL FORM
  lastId = getId() + 1;
  const array = read();
  const input = getInput();
  // ver de que manera validar los input
  const newEntidad = new Anuncio_Auto(
    lastId,
    input[0],
    input[1],
    input[2],
    input[3],
    input[4],
    input[5],   
    input[6],
    
    true
  );
 
  array.push(newEntidad);

  save("lastId", lastId);
  save("anuncio_autos", array);
}
function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function read() {
  return JSON.parse(localStorage.getItem("anuncio_autos")) || [];
}

function getId() {
  lastId = JSON.parse(localStorage.getItem("lastId") || 0);
  return lastId;
}
