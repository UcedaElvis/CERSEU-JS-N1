//Los loops (bucles), son una manera rapida y sencilla de hacer algo ( tarea) repetidamente

var estudiantes = ['Maria','Sergio','Rosa','Daniel'];
function saludarEstudiante(estudiante){
    console.log(`Hola ${estudiante}`);
}
for(var i=0; i<estudiantes.length; i++){
    saludarEstudiante(estudiantes[i]);
}
console.log("Otra manera de mostrar el resultado, FOR OF");
// Otra manera de mostrar el resultado
for( var estudiante of estudiantes){
    saludarEstudiante(estudiante);
}
//Otra manera
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift(); // recordar que shift()elimina el primer elemento y lo muestra
    saludarEstudiante(estudiante);

}