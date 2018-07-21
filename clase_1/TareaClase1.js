/** 1. Colocar un monto expresado en soles y luego imprimir el monto equivalente
en dólares (con 2 dígitos decimales).
    Ej:(100 soles son 5.55 dolares)
2. Elaborar un programa en el que se ingrese una cantidad expresada en segundos y
luego la exprese en días, horas, minutos y segundos.
3. Poner una distancia en metros y pasarlos a centimetros, milimetros y kilometros.
4. Iniciales de una frase. Sigla (CLUB ATLETICO RIVER PLATE = CARP, CLUB ATLETICO
 BOCA JUNIORS = CABJ)
5. Poner letras y que te de nro (0800-123-SUSANA = PSPS = 0800-123-787262)
*/
/**
ejercicio 1 */
var soles = 50
var dolares = soles / 3.20

console.log('50 soles en dolares son:' + ' ' + dolares)
console.log('50 soles en dolares son (truncados):' + ' ' + dolares.toFixed(2))
console.log('50 soles en dolares son (redondeados):' + ' ' + Math.round(dolares * 100) / 100)

/** EFERCICIO 2 */

var segundos = 3600
var dias = 24
var horas = 60
var minutos = 60

console.log(segundos + ' ' + 'segundos' + ' ' + 'en minutos:' + ' ' + segundos / minutos)
console.log(segundos + ' ' + 'segundos' + ' ' + 'en horas:' + ' ' + segundos / minutos / horas)
console.log(segundos + ' ' + 'segundos' + ' ' + 'en dias:' + ' ' + segundos / minutos / horas / dias)

/** EJERCICIO 3 */

var metros = 1
var centimetros = 100
var milimetros = 1000
var kilometros = 1000

console.log(metros + ' ' + 'metros' + ' ' + 'en centimetros:' + ' ' + metros * centimetros + 'cm')
console.log(metros + ' ' + 'metros' + ' ' + 'en milimetros:' + ' ' + metros * milimetros + 'mm')
console.log(metros + ' ' + 'metros' + ' ' + 'en kilometros:' + ' ' + metros / kilometros + 'km')

/** EJERCICIO 4 */
var texto = 'Vicente Arturo Chavez Villa'
var partes = texto.split(' ')
var sigla = ''
for (var i = 0; i < partes.length; i++) {
  sigla += partes[i][0]
}
console.log(sigla)

var s = 'Vicente Arturo Chavez Villa',
  a = s.split(' ')
l = a.length,
    i = 0,
    n = ''

for (; i < l; ++i) {
  n += a[i].charAt(0)
}

console.log(n)

/** EJERCICIO 5 */

function convertPhoneLetters (input) {
  input = input.toLowerCase()
  var phonenumber = ''
  for (var i = 0; i < input.length; i++) {
    var character = input[i]
    switch (character) {
      case 'a':
      case 'b':
      case 'c':
        console.log('2')
        phonenumber += '2'
        break
      case 'd':
      case 'e':
      case 'f':
        console.log('3')
        phonenumber += '3'
        break
      case 'g':
      case 'h':
      case 'i':
        console.log('4')
        phonenumber += '4'
        break
      case 'j':
      case 'k':
      case 'l':
        console.log('5')
        phonenumber += '5'
        break
      case 'm':
      case 'n':
      case 'o':
        console.log('6')
        phonenumber += '6'
        break
      case 'p':
      case 'q':
      case 'r':
      case 's':
        console.log('7')
        phonenumber += '7'
        break
      case 't':
      case 'u':
      case 'v':
        console.log('8')
        phonenumber += '8'
        break
      case 'w':
      case 'x':
      case 'y':
      case 'z':
        console.log('9')
        phonenumber += '9'
        break
      default:
        console.log(character)
        phonenumber += character
        break
    }
    console.log(input)
    console.log(phonenumber)
  }

  return phonenumber
}

convertPhoneLetters('0800-SUSANA')
convertPhoneLetters('0800-SOS')
