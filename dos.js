let nombreIngresado = prompt("Ingresá tu nombre")

let correoElectronico = prompt("Ingresá un mail de contacto")

let animalPerdido = prompt("Animal perdido")

let zonaPerdido = prompt("Zona donde se perdió")

let colorPelo = prompt("Color de su pelaje")

let edadAproximada = prompt("Edad aproximada del animal")

let ficha = `El usuario nuevo es ${nombreIngresado}, su mail de contacto es ${correoElectronico}, el animal perdido es ${animalPerdido}, la zona donde se perdió es ${zonaPerdido}, el color de su pelaje es ${colorPelo}, y la edad aproximada es ${edadAproximada}`

alert (`Tu caso fue resgistrado con éxito. Muchas gracias ${nombreIngresado}!`);

console.log(ficha)
