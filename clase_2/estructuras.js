// Condicionales

var ciudad = 'Arequipa'
if (ciudad === 'Arequipa') {
  console.log('Estoy en Perú')
} else {
  console.log('Estoy en Argentina')
}

var edad = 33

if (edad < 16) {
  console.log('son un niño')
} else if (edad < 21) {
  console.log('soy un menor adulto')
} else {
  console.log('soy adulto')
}

if (edad > 18 && edad < 65) {
  console.log('soy un trabajador')
} else if (edad > 65) {
  console.log('soy jubilado')
} else {
  console.log('soy estudiante')
}

// Bucles o Loops
var i = 0
var j = 45
while (i < 10 || j < 50) {
  console.log(i, j)
  i++
  j++
}

var jugadorEncontrado = null
var lista = [{name: 'Pogba'}, {name: 'Griezman'}, {name: 'Mbapeé'}, {name: 'Mbapeé'}, {name: 'Mbapeé'}, {name: 'Mbapeé'}]
// for (var i = 0; i < lista.length; i++) {
//   var jugador = lista[i]
//   if (jugador.name === 'Griezman') {
//     console.log('lo encontré')
//     jugadorEncontrado = jugador
//   }
//   console.log(jugador)
// }

// Búsqueda en arrays
var k = 0
var jugador = lista[k]
while (k < lista.length && jugador.name !== 'Griezmannnnnn') {
  k++
  jugador = lista[k]
}
if (k === lista.length) {
  console.log('NO LO ENCONTRO')
}
console.log('k', k)
console.log(lista[k])

var persona = {
  name: 'Arthur',
  age: 23,
  isAdult: true,
  address: {
    street: 'Av los Incas',
    streetNumber: '1234'
  }
}

var casa = {
  address: {
    street: 'Av los Incas',
    streetNumber: '1234'
  }
}

// Sirve para recorrer objetos
for (var propiedad in persona) {
  console.log(propiedad)
  console.log(persona[propiedad])
}

var texto = 'Hola Hola Hola como estas. Estoy como puedo'
var partes = texto.split(' ')
var contador = {}
console.log(partes)
for (var i = 0; i < partes.length; i++) {
  var palabra = partes[i]
  if (typeof contador[palabra] !== 'undefined') {
    contador[palabra]++ // Ya existe, la incremento
  } else {
    contador[palabra] = 1 // No existe dentro del objeto, entonces la creo.
  }
  console.log(palabra)
}
// console.log('contador', contador)

for (var propiedad in contador) {
  console.log(propiedad)
  console.log(contador[propiedad])
}

var tipo = 'a'
switch (tipo) {
  case 'a':
    console.log('soy tipo a')
    break
  case 'b':
    console.log('soy tipo b')
    break
  case 'c':
    console.log('soy tipo c')
    break
  default:
    console.log('no reconzco el tipo')
    break
}
