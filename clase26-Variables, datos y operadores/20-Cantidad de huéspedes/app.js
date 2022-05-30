//Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.

const habitacionParaDos = prompt('Ingrese cantidad de habitaciones para 2 personas')
const habitacionParaTres = prompt('Ingrese cantidad de habitaciones para 3 personas')
const habitacionParaCuatro = prompt('Ingrese cantidad de habitaciones para 4 personas')

const cantidadDeHuespedes = habitacionParaDos * 2 + habitacionParaTres * 3 + habitacionParaCuatro * 4

alert (`Total de huéspedes que puede albergar el hotel ${cantidadDeHuespedes}`)

