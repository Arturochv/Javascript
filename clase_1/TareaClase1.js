/**1. Colocar un monto expresado en soles y luego imprimir el monto equivalente
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
var dolares = soles / 3.25

console.log('50 soles en dolares son:' + ' ' + dolares )

/** EFERCICIO 2 */

var segundos = 3600
var dias = 24
var horas = 60
var minutos = 60

console.log(segundos+' '+'segundos'+ ' '+'en minutos:' +' ' + segundos / minutos)
console.log(segundos+' '+'segundos'+' '+'en horas:' +' '+ segundos / minutos / horas)
console.log(segundos+' '+'segundos'+' '+'en dias:' + ' '+ segundos / minutos / horas / dias)

/** EJERCICIO 3 */

var metros = 1210
var centimetros = 100
var milimetros = 1000
var kilometros = 1000

console.log(metros + ' '+ 'metros' + ' ' + 'en centimetros:' + ' ' + metros * centimetros +'cm')
console.log(metros + ' '+ 'metros' + ' ' + 'en milimetros:' + ' ' + metros * milimetros +'mm')
console.log(metros + ' '+ 'metros' + ' ' + 'en kilometros:' + ' ' + metros / kilometros +'km')

/** EJERCICIO 4 */

var s = "Vicente Arturo Chavez Villa",
    a = s.split(' ')
    l = a.length,
    i = 0,
    n = "";

for (; i < l; ++i)
{
    n += a[i].charAt(0);
}

console.log(n);

/** EJERCICIO 5 */

function convertPhoneLetters(input) {
var inputlength = input.length;
input = input.toLowerCase();
var phonenumber = "";
for (i = 0; i < inputlength; i++) {
var character = input.charAt(i);


switch(character) {

case '0': phonenumber+="0";break;
case '1': phonenumber+="1";break;
case '2': phonenumber+="2";break;
case '3': phonenumber+="3";break;
case '4': phonenumber+="4";break;
case '5': phonenumber+="5";break;
case '6': phonenumber+="6";break;
case '7': phonenumber+="7";break;
case '8': phonenumber+="8";break;
case '9': phonenumber+="9";break;

case 'a': case 'b': case 'c': phonenumber+="2";break;
case 'd': case 'e': case 'f': phonenumber+="3";break;
case 'g': case 'h': case 'i': phonenumber+="4";break;
case 'j': case 'k': case 'l': phonenumber+="5";break;
case 'm': case 'n': case 'o': phonenumber+="6";break;''
case 'p': case 'q': case 'r': case 's': phonenumber+="7";break;
case 't': case 'u': case 'v': phonenumber+="8";break;
case 'w': case 'x': case 'y': case 'z': phonenumber+="9";break;

default: phonenumber+=character;

   }
}

return phonenumber;
}
