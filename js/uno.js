let nombreIngresado = prompt("Ingresá tu nombre")

let correoElectronico = prompt("Ingresá un mail de contacto")

let animalEncontrado = prompt("Animal encontrado")

let zonaEncontrado = prompt("Zona donde fue hallado")

let colorPelo = prompt("Color de su pelaje")

let edadAproximada = prompt("Edad aproximada del animal")

let ficha = `El usuario nuevo es ${nombreIngresado}, su mail de contacto es ${correoElectronico}, el animal encontrado es ${animalEncontrado}, la zona donde fue hallado es ${zonaEncontrado}, el color de su pelaje es ${colorPelo}, y la edad aproximada es ${edadAproximada}`

alert (`Tu caso fue resgistrado con éxito. !Muchas gracias ${nombreIngresado}!`);

console.log(ficha)
