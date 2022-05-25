//Heladería: Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".

const gustoUno = prompt('Ingrese su primer gusto')
const gustoDos = prompt('Ingrese su segundo gusto')
const gustoTres = prompt('Ingrese su tercer gusto')

document.write(`Aquí está tu helado de ${gustoUno} ${gustoDos} ${gustoTres}, gracias por tu compra!`)
