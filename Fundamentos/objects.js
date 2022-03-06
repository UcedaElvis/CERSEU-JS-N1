//Un objeto es una coleccion de propiedades y una porpiedad es una asociacion de key y valores

var object = {};

var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2021,
  detallesDelAuto: function () {
    // Es una función de expresión y es anónima, ya que no tiene nombre, su nombre está asociado a la variable
    return `Auto ${this.modelo} ${this.annio}`; // this: es para acceder a la propiedad del elemento
  },
};
miAuto.annio;
miAuto.modelo;
miAuto.detallesDelAuto();

//var ejemplo=[ {nombre:'Elvis'}, {edad:18}, {estado: 'Soltero'}]; // Es un arreglo que tiene varios objetos
//console.log(ejemplo);

// Función contructora
function auto(marca, modelo, annio) {
this.marca=marca; // Utilizamos el this para asignar valores a las propiedades del objeto
this.modelo=modelo;
this.annio=annio;
}
var newAuto = new auto('Tesla', 'Model', 2022);

