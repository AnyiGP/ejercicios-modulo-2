//Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej. empezando con 5 e incrementando 5, Incremento 1) Total 10, Incremento 2) Total 15, Incremento 3) Total 20, etc.).

const numeroDePartida = prompt('Ingresa un numero de partida')
let incremento = prompt('Ingresa la cantidad que quieres incrementar')

let mensajeUno = alert (`Mensaje 1 Total ${Number(numeroDePartida) + Number(incremento)}`)

let mensajeDos = alert (`Mensaje 2 Total ${Number(numeroDePartida) + Number(incremento * 2)}`)

let mensajeTres = alert (`Mensaje 3 Total ${Number(numeroDePartida) + Number(incremento * 3)}`)
let mensajeCuatro = alert (`Mensaje 4 Total ${Number(numeroDePartida) + Number(incremento * 4)}`)
let mensajeCinco = alert (`Mensaje 5 Total ${Number(numeroDePartida) + Number(incremento * 5)}`)


