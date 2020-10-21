class Anuncio {
  id;
  titulo;
  transaccion;
  descripcion;
  precio;
 

  constructor(id, titulo,  descripcion,transaccion, precio){
      this.id = id;
      this.titulo = titulo;
      this.transaccion = transaccion;
      this.descripcion = descripcion;
      this.precio = precio;
      
  }
}

export class Anuncio_Auto extends Anuncio {
  num_puertas;
  num_KMs;
  potencia;
  active;

  constructor(id, titulo,   transaccion,descripcion, precio, num_puertas, num_KMs,potencia, active){
      super(id, titulo, descripcion,transaccion,  precio);
      this.num_puertas = num_puertas;
      this.num_KMs = num_KMs;
      this.potencia = potencia;
      this.active = active;
  }
}