/***************  RETO 1*****************/
var papel = 'papel'
var tijera = 'tijera'
var piedra = 'piedra'
function jugar(jugador, computadora){
    elegir();
    // si el jugador es el ganador
    if((jugador ==="papel" && computadora ===piedra) || (jugador ==="piedra" && computadora==="tijera") || (jugador ==="tijera" && computadora ==="papel")) {
        return `Usted ganó! ${jugador} vence a ${computadora}`;
    }    
    // si la computadora gana
    else if((jugador==="piedra" && computadora==="papel") || (jugador==="tijera" && computadora==="piedra") || (jugador==="papel" && computadora==="tijera")) {
        return `La computadora ganó! ${computadora} vence a {jugador}`;
    }
    // si es empate
     else {
        return "Han empatado!";
    }
}

function elegir () {
    jugadorElige = prompt("Escribir una de las 3 opciones: Piedra, Papel o Tijera");
    //jugadorElige = jugadorElige.toLowerCase();
    pcElige = pcJuega();
    console.log(`La computadora eligió: ${pcElige}`);
    console.log(`Usted eligió ${jugadorElige}`);
}

function pcJuega() {
    const opciones = ["piedra", "Papel", "tijera"];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

let jugadorElige;
let pcElige;

for (let i = 0; 1 < 5; i++){
    console.log(jugar(jugadorElige, pcElige));
}


