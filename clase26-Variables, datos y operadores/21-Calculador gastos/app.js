//Crear un programa que pida al usuario cuanto dinero disponible tiene, y vaya preguntando cuánto tiene que pagar por cada servicio, pidiendo el nombre del servicio y el monto a pagar, uno a la vez. Cada vez que pide ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan por ingresar, utilizando una variable, y mostrar cuánto dinero disponible queda. Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. Hacerlo con 3 servicios.

const dineroDisponible = prompt('Ingrese cantidad de dinero disponible')

const servicioUno = prompt('Ingrese nombre del servicio')
const montoServicioUno = prompt('Ingrese monto a pagar')

const serviciosPorPagar = 3

const saldoDisponibleUno = dineroDisponible - montoServicioUno

alert (`Servicios por pagar ${serviciosPorPagar - 1}, su saldo es ${saldoDisponibleUno}`)

const servicioDos = prompt('Ingrese nombre del servicio')
const montoServicioDos = prompt('Ingrese monto a pagar')

const saldoDisponibleDos = saldoDisponibleUno - montoServicioDos

alert (`Servicios por pagar ${serviciosPorPagar - 2}, su saldo es ${saldoDisponibleDos}`)

const servicioTres = prompt('Ingrese nombre del servicio')
const montoServicioTres = prompt('Ingrese monto a pagar')

const saldoDisponibleTres = saldoDisponibleDos - montoServicioTres

alert (`Servicios por pagar ${serviciosPorPagar - 3}, su saldo es ${saldoDisponibleTres}`)

alert (`Servicio a pagar: ${servicioUno} Monto $ ${montoServicioUno} Saldo $ ${saldoDisponibleUno}
Servicio a pagar: ${servicioDos} Monto $ ${montoServicioDos} Saldo $ ${saldoDisponibleDos} 
Servicio a pagar: ${servicioTres} Monto $ ${montoServicioTres} Saldo $ ${saldoDisponibleTres}`)


