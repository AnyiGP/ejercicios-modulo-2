//Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).

const distanciaDelRecorrido = prompt('Ingresa los kilometros del recorrido')
const bicicleta = ((distanciaDelRecorrido)*60/20)
const aPie = ((distanciaDelRecorrido)*60/7)
const colectivo = ((distanciaDelRecorrido)*60/40)

alert (`Tiempo: Bicicleta ${bicicleta} minutos. Caminando ${aPie} minutos. En colectivo ${colectivo} minutos`)


