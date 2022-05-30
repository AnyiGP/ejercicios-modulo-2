//Crear un programa que tome la orden de compra de un local. Pedir al usuario que ingrese la cantidad que desea comprar de tres productos distintos, uno por uno, mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar el pago. Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas. Los precios de los productos deben estar definidos de antemano en variables.


const cantidadProductoUno = prompt('Ingrese cantidad de Producto Uno')
const valorProductoUno = 100
const totalUno = cantidadProductoUno * valorProductoUno

const cantidadProductoDos = prompt('Ingrese cantidad de Producto Dos')
const valorProductoDos = 20
const totalDos = cantidadProductoDos * valorProductoDos

const cantidadProductoTres = prompt('Ingrese cantidad de Producto Tres')
const valorProductoTres = 10
const totalTres = cantidadProductoTres * valorProductoTres

let totalCompra = totalUno+totalDos+totalTres

alert (`Total a pagar: ${totalCompra}`)

let cuotas = prompt ('Ingrese cantidad de cuotas')

alert (`Detalle:
Producto Uno: ${totalUno}
Producto Dos: ${totalDos}
Producto Tres: ${totalTres}
Valor Total de la compra: ${totalCompra}
Cantidad de cuotas: ${cuotas}
Valor de cada cuota: ${totalCompra/cuotas}
`)