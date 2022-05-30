//Crear un programa que pida ingresar una cantidad en segundos y muestre un mensaje con el resultado de la conversión en horas, minutos y segundos que corresponde a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar operador módulo)
const totalSegundos = prompt('Ingresa segundos')

let segundos = totalSegundos % 60

let minutos = ((totalSegundos - segundos) / 60) % 60 

let horas = (totalSegundos - segundos - (minutos*60)) / 3600

alert (`${horas} Horas ${minutos} minutos ${segundos} segundos`)

