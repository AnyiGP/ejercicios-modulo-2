//Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.

const escala1 = prompt('Ingresa el primer destino del vuelo')
const escalaDuracion1 = prompt('Ingresa el tiempo del vuelo en minutos')

const escala2 = prompt('Ingresa siguiente destino del vuelo')
const escalaDuracion2 = prompt('Ingresa el tiempo del vuelo en minutos')

const escala3 = prompt('Ingresa el ultimo desino de tu vielo')
const escalaDuracion3 = prompt('Ingresa el tiempo del vuelo en minutos')

const duracionTotal = (Number(escalaDuracion3) + Number(escalaDuracion2) + Number(escalaDuracion1))

alert (`Destino 1: ${escala1}, duracion ${escalaDuracion1} minutos. Destino 2: ${escala2}, duracion ${escalaDuracion2} minutos. Destino 3: ${escala3}, duracion ${escalaDuracion3} minutos. Duracion total del viaje ${duracionTotal} minutos`)


