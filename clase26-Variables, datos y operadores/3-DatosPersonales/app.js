//Datos personales Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.
const nombre = prompt('Ingresa tu nombre')
const apellido = prompt('Ingresa tu apellido')
const edad = prompt('Ingresa tu edad')
const nacionalidad = prompt('Ingresa tu nacionalidad')
const documento = prompt('Ingresa tu documento')

document.write(`Nuevo usuario agregado al sistema: ${nombre} ${apellido} ${edad} ${nacionalidad} ${documento}`)
