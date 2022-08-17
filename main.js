class prendas {
  constructor(tipo, precio, talle) {
    this.tipo = tipo;
    this.precio = precio;
    this.talle = talle;
  }
}

let prendas1 = new prendas("remera", 1000, "m");
let prendas2 = new prendas("pantalon", 1400, "s");
let prendas3 = new prendas("buzo", 1200, "xl");
let prendas4 = new prendas("calza", 1500, "m");

const ropas = [];

ropas.push(prendas1, prendas2, prendas3, prendas4); //DRY the code ;) (Do Not Repeat Yourself)

console.log(ropas);

//filtrar por precio

let preciomenor1400 = ropas.filter((prendas) => prendas.precio <= 1400);

console.log(preciomenor1400);
