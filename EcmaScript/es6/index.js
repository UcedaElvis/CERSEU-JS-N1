// Antes de es6, asignando valores por defecto

// function newFunction(name, age, country) {
//   var name = name || "Miguel";
//   var age = age || 25;
//   var country = country || "PER";

//   console.log(name, age, country);
// }

// es6 _> permite pasar como argumentos valores por defecto

// function newFunction2(name = "Miguel", age = 25, country = "PER") {
//   console.log(name, age, country);
// }

// newFunction();
// newFunction2();
// newFunction2('Kevin',23,'COL');

// /********Ejemplo2*********** */

// let hello = 'Hello';
// let world = 'World';
// let epicPhrase = hello + ' '+ world;
// console.log(epicPhrase);
// console.log(`${hello} ${world}`);

// template literal (comillas francesas alt+96)
// es6

// let epicPhrase2 = `${hello} ${world}`;
// console.log(epicPhrase2);

// multilineas
// let lorem =
//   "Esto es un lorem Ipsum Esto es un lorem Ipsum \n" + "Otra frase epica";
// console.log(lorem);

/** ========CON ECMASCRIPT6======== */
// let lorem2 = `Esto es un lorem Ipsum Esto es un lorem Ipsum
// Otra frase epica`;
// console.log(lorem2);

/**Con document.write(): El método escribe expresiones HTML o 
 * código JavaScript en un documento. */
// document.write(lorem3 = "Esto es un lorem Ipsum Esto es un lorem Ipsum" + "<br/> Otra frase épica");


// /**======Desestructuracion de elementos========*/
// let person ={
//     name: 'Enrique',
//     age:25,
//     country:'PER'
// }
// console.log(person.name,person.age);

// desestructuracion de elementos en ES6

// let {name ,age,country} = person;
// console.log(age, country);


// /**Operador de propagacion - Spread Operator */

// let team1=['Enrique','Juan','Luis'];
// let team2=['Veronica','Maria','Blanca'];

// let teamTotal =['Diego',...team1,...team2];
// console.log(teamTotal);


// let - const

// {
//     var globalVar = 'Global Var';
// }

// {
//     let globalLet = 'Global Let';
//     console.log(globalLet);
// }
// console.log(globalVar);
//console.log(globalLet)


// const a = 'b';
// a='a';
// console.log(a);


// /**====Arrow Functions - Funciones de Flecha *=====/

const names = [{name:'Enrique',age:25},{name:'Veronica',age:26}];
// //()=>{}
// let listOfNames = names.map(function(item){
//     console.log(item.name);
// });
// let listOfNames2 = names.map((item)=>{console.log(item.name)});

// let listOfNames3 = (name,age,country)=>{
//     codigo
// }

// let listOfNames4 = (name) =>{
//     codigo
// }


// Puedo utilizar una nueva funcion donde le paso el valor numerico y hago que se multiplique por si mismo y lo retorno
//const square = (num)=>num*num;

// /**Las promesas  */

// const helloPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         //codigo
//         if(false){
//             resolve('Hey'); 
//         } else {
//             reject('Ups algo anda mal!!');
//         }
//     });
// }

// helloPromise()
//     .then(response=>console.log(response))
//     .then(()=>console.log('Hola soy una promesa resuelta'))
//     .catch(error=>console.log(error))
//     .then(()=>console.log('Te equivocaste'));



// /**Import y export */

import { hello } from "./module.js"; //puedo traer mi documento
//import hello from './module'
hello();

// Generadores : es una funcion especial que retorna una serie de valores, segun el algoritmo definido

// function* helloWorld(){
//     if(true){
//         yield 'Hello';
//     }
//     if(true){
//         yield 'World'
//     }
// }

// const generatorHello = helloWorld();
// console.log(generatorHello.next().value);
// console.log(generatorHello.next().value);
// console.log(generatorHello.next().value);
