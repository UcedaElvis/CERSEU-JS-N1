//Caracteristicas añadidas es Object.entries, la cual va devolver la clave y los valores de una matriz

// const data = {
//     frontend:'Gustavo',
//     backend:'Enrique',
//     design:'Luis',
// }

// const entries= Object.entries(data);
// console.log(entries);
// console.log(entries.length);

//Object.values : devuelve los valores de un objecto en un arreglo

// const data = {
//     frontend:'Ivan',
//     backend:'Monica',
//     design:'Karla',
// }

// const values = Object.values(data);
// console.log(values)
// console.log(values.length);
// const nuevoArreglo = values;
// console.log(nuevoArreglo);
// console.log(nuevoArreglo.length);

/**Cómo funciona setTimeout */
setTimeout (()=> {
    console.log('Hola Elvis, después de 5 segundos');
}, 5000);
console.log('setTimeout() de EJEMPLO o no');

const saludos = (nombre, )=> {
//function saludos(nombre, rol){
    console.log(`Hola, mi nombre es ${nombre}`);
    console.log(`Yo soy ${rol}`);
  }
  /**setTimeout con parámetros */
  setTimeout(saludos, 3000, "Nathan", "Programador");

//Objectos Padding

const string = 'Hello';
console.log(string.padStart(8, 'Hi '));
console.log(string.padEnd(12,'------'));

//Trailing commas literals

const obj ={
    frontend:'Ivan',
    backend:'Monica',
    design:'Karla',
}

//Async Await: importantes caracteristica de es8

const helloWorld =()=>{
    return new Promise((resolve,reject)=>{
        //condicion ? true :false (con operación ternaria )
        (true)
        ? setTimeout(()=>resolve ('Hello World'),3000)
        : reject(new Error('Test Error, Ups !!'));
    });
};
//helloWorld();

//Trabajaremos de una mejor forma el asincronismo

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);    
};
helloAsync();

//añadiendo el try -catch

const anotherFunction = async()=>{
    try{
        const hello = await helloWorld();
        console.log(hello);   
    } catch (error){
        console.log(error);
    }
};
anotherFunction();