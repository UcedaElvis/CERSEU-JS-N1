//Un array es una estructura de datos, es un objeto tipo lista de alto nivel.
//Los arrays son objetos de tipo lista cuyo prototipo tiene metodos para realizar
// operaciones de recorrido y mutacion.

var frutas = []; //Array literal Sintax

var frutas = ["Manzana", "Mandarina", "Uva", "Pera"];
console.log(frutas);
console.log(frutas.length); // length es una propiedad de los arreglos, indica la cantiddad de elementos del Array

// Acceder por índice a un elemento del Array
console.log(frutas[3]); // Los Array inician en 0 (cero), nos referomos al índice

//========== Métodos para mutar Arrays ============

//.push(); Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
var frutas = ["Manzana", "Mandarina", "Uva", "Pera"];
var masFrutas = frutas.push("Plátano"); // Este método añane 'Plátano' al final del arreglo
console.log(frutas);
console.log(masFrutas);

//.pop(); Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
var frutas = ["Manzana", "Mandarina", "Uva", "Pera", "Plátano"];
var ultimo = frutas.pop("Plátano"); // Eliminará el elemento'Plátano'
console.log(frutas);

//unshift(); Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
var frutas = ["Manzana", "Mandarina", "Uva", "Pera"];
var nuevaLongitud = frutas.unshift("Plátano"); // Añade el elemento 'Plátano' al inicio del Array.
console.log(frutas);
console.log(nuevaLongitud); // Devuelve la nueva longitud del Array frutas.

// shift() Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
var frutas = ["Manzana", "Mandarina", "Uva", "Pera"];
var borrarFruta = frutas.shift(); // eliminar el elemento 'Manzana' (no es necesario pasarlo como parámetro), que está al inicio en el Array
console.log(frutas);
console.log(borrarFruta);
