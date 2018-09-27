console.log('Hola Arthur!')
/**
 * Javascript (EcmaScript 5)
 * Lenguaje no tipado
 * Orientado a prototypos (con objetos)
 */
// Variables (son un espacio reservado en memoria que almacena datos de un tipo)

/*
  var es la palabra reservada (keyword) para crear una variable
  name es el nombre de la variable
  Arthur es el valor
  el tipo es texto
 */
// Tipos de datos primitivos
var name = 'Arthur' // String
var age = 23 // Number
var isAdult = true // Boolean

console.log('mi nombre es ' + name)
console.log('age ' + age)
console.log('isAdult ' + isAdult)

var lastName = null // null es un valor, está inicializa la variable y vale null
console.log('lastName', lastName)

// age  > 18 es una  expresion booleana. Devuelve true o false
console.log('Soy mayor de edad', age > 18)

var soyJoven = age < 40 // creo la variable y le asigno un valor.
console.log('soyJoven', soyJoven)

// Esta variable está declarada y no inicializada. Su valor es undefined
var soyGrande
soyGrande = age > 40
console.log('soyGrande', soyGrande)

/**
 * Operadores de comparación
 */

var a = 10
var b = 20
console.log('a > b', a > b)
console.log('a < b', a < b)
console.log('a >= b', a >= b)
console.log('a <= b', a <= b)
console.log('a == b', a == b)
console.log('a === b', a === b)

// Comparación triple igual
var x = '100'
var y = 100
console.log('x == y', x == y)
console.log('x === y', x === y)// Usar siempre ===.

/**
 * Operadores matemáticos
 */

var a = 100
var b = 50

console.log('a + b', a + b)
console.log('a - b', a - b)
console.log('a * b', a * b)
console.log('a / b', a / b)
console.log('a % b', a % b) // Operador resto

/**
 * Operadores de Concatenación
 */

var textoA = 'Hola'
var textoB = 'Arthur'
var mensaje = textoA + ' ' + textoB
console.log('mensaje', mensaje)

mensaje = mensaje + 10 // Concatenar un numero con un texto lo convierte a texto
console.log('mensaje', mensaje)

/**
 * Operaciones aritméticas
 */
var i = 1
console.log('i', i)
i++
console.log('i', i)
i++
console.log('i', i)
i--
console.log('i', i)
i = i - 1
console.log('i', i)
// i = i + 2
i += 2
console.log('i', i)
console.log('i * 10', i * 10)
i *= 10
console.log('i', i)

/**
 * Objects
 * Un objeto contiene propiedades
 */

var personaVacia = {} // este es un objeto vacio

var persona = {
  name: 'Arthur',
  age: 23,
  isAdult: true,
  address: {
    street: 'Av los Incas',
    streetNumber: '1234'
  }
}
persona.name = 'Arthuro' // Lo sobreescribí
persona.ciudad = 'Arequipa' 

console.log('persona', persona)
console.log('Nombre', persona.name) // Accedo a la propiedad name dentro de persona
console.log('Edad', persona.age) // Accedo a la propiedad age dentro de persona
console.log('Dirección', persona.address.street + ' ' + persona.address.streetNumber) // Accedo a la propiedad age dentro de persona

console.log('Nombre []', persona['name']) // Acceso dinámico
var propiedad = 'age'
console.log('Propiedad []', persona[propiedad]) // Acceso dinámico
persona[propiedad] = 'Lima'
persona.propiedad = 'Lima'
console.log(persona)
/**
 * Arrays (son elementos de cualquier tipo)
 * Listas
 */

var listaVacia = [] // este es un array vacío

var listaIncializada = [1, 2, 3, 4, 5] // esta es una lista de numeros
console.log('listaIncializada', listaIncializada)

var listaIncializadaDeLetras = ['a', 'b', 'c']
console.log('listaIncializadaDeLetras', listaIncializadaDeLetras)

var listaMezclada = ['a', 1, 'b', 2, 'c', 'd', 50]
console.log('listaMezclada', listaMezclada)

var listaDeObjetos = [{name: 'Oscar'}, {name: 'Britt'}, {name: 'Pancho'}, {name: 'Tommy'}]
console.log('listaDeObjetos', listaDeObjetos)

var listaDeArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] // Matriz
console.log('listaDeArray', listaDeArray)

var lista = []
lista.push(1) // método que inserta un elemento al final de la lista
lista.push(2)
lista.push(3)
console.log('Lo que hay en la posición 0', lista[0])
console.log('Lo que hay en la posición 1', lista[1])
console.log('Lo que hay en la posición 2', lista[2])
console.log('Lo que hay en la posición 75', lista[75])
console.log('largo del array', lista.length)
console.log('lista', lista)
lista.pop() // saca el ultimo - LIFO
console.log('lista', lista)
lista.shift() // saca el primero - FIFO
console.log('lista', lista)
console.log('largo del array', lista.length)
console.log('Lo que hay en la posición 0', lista[0])
console.log('Lo que hay en la posición 1', lista[1])
console.log('Lo que hay en la posición 2', lista[2])
lista.unshift(10) // inserta un elemento al principio
console.log('lista', lista)

var elementoBorrado = lista.pop()
console.log('se borró el elemento', elementoBorrado)

var listaDeNombres = [ {name: 'Paolo Guerrero'}, {name: 'Pedro Galleze'} ]
console.log(listaDeNombres[0].name)
console.log(listaDeNombres[1].name)
listaDeNombres[1].name = 'Pedro Galleze Arquero' // Modifico el valor que está en el array.
listaDeNombres[1].puesto = 'Arquero' // Crea una nueva property dentro del elemento 1
console.log(listaDeNombres[1].name)

delete listaDeNombres[1] // borra el elemento pero mantiene la posición del array. El largo es el mismo que antes de que se borre el elemento
console.log('listaDeNombres', listaDeNombres)
