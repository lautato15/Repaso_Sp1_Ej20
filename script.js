function play(move) {
  if (move !== "Papel" && move !== "Piedra" && move !== "Tijera")
    return "Error de parametros";
  let moves = {
    1: "Tijera",
    2: "Piedra",
    3: "Papel",
  };
  let PCmove = Math.floor(Math.random() * 3) + 1;
  if (moves[PCmove] === move)
    return `La computadora eligió ${moves[PCmove]}. Empataron.`;
  else if (
    (move === "Tijera" && moves[PCmove] === "Papel") ||
    (move === "Piedra" && moves[PCmove] === "Tijera") ||
    (move === "Papel" && moves[PCmove] === "Piedra")
  )
    return `La computadora eligió ${moves[PCmove]}. Ganaste.`;
  else return `La computadora eligió ${moves[PCmove]}. Perdiste.`;
}

// Ejercicio 20
// Vamos a crear un pequeño juego, versión de “Piedra, Papel o Tijera”, para jugar
// contra la computadora.
// Para eso deberán crear una función en JavaScript llamada play (Jugar) que recibe
// como parámetro un string que puede ser “Piedra”, “Papel” o “Tijera”.
// La función deberá definir qué movimiento hizo la computadora y en base a eso
// determinar un ganador.
// Ejemplos:
// Input ---> Output
// play("Piedra") ---> "La computadora eligió Papel. Perdiste."
// play("Piedra") ---> "La computadora eligió Tijeras. Ganaste."
// play("Papel") ---> "La computadora eligió Papel. Empataron."
// play("Papel") ---> "La computadora eligió Tijeras. Perdiste."
