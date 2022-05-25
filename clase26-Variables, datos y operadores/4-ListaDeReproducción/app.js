//Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'".


const nombrePlaylist = prompt('Ingresa el nombre de tu playlist')
const song1 = prompt('Tema 1')
const song2 = prompt('Tema 2')
const song3 = prompt('Tema 3')

alert (`Nuevo playlist ${nombrePlaylist} con las cnaciones ${song1}, ${song2}, ${song3}`)
