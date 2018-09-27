    /** Hacer cada item como una función
    Mostrar los numeros del 1 al 10 (bucle)
    Mostrar solo numeros pares del 1 al 100 (Operador % u otra formas)
    Mostrar los numeros de un parámetro A (numérico) hasta un parámetro B (numérico). Por ejemplo: los números del 10 al 20
    Mostrar la sumatoria de los numeros del 1 al 10
    Mostrar la sumatoria de los numeros de un parámetro A(numérico) hasta un parámetro B(numérico)
    Mostrar todos los elementos del siguiente array ([1,2,3,4,5])
    Mostrar todos los elementos de un Array ([1,2,3,4,5]) desde la primer posición hasta la mitad del largo
    Crear un array que contenga los valores numericos del 1 al 100
    Crear un array que contenga los valores numericos de un parámetro A hasta un parámetro B(númerico). Por ejemplo: del 10 al 20
    Ejecutar 8 y Mostrar todos los elementos del Array


    Mostrar si todos los numeros dentro de un array son pares
    Crear un objeto que contenga la posición del array como clave y el valor de la posición como valor del objeto. [100,200,300] = {0: 100, 1: 200,3:300}
    En base a una palabra, crear un objeto que cuente la cantidad de cada letra
    Ejemplo: Ingreso  hola => {h:1, o:1, l:1, a:1}
    */

    // Mostrar los numeros del 1 al 10 (bucle)

    function numeros(){
      for (var i = 1; i <= 10; i++){
        console.log(i)
      }
    }
    //numeros() // muestra numeros del 1 al 10

    //Mostrar solo numeros pares del 1 al 100 (Operador % u otra formas)

    function pares(){
      for (var i = 1; i <= 100; i++){
        if (i % 2 === 0) {
          console.log(i)
        }
      }
    }
    //pares()

    function pares2(){
      for (var i = 2; i <= 100; i+=2){
        console.log(i)
      }
    }
    //pares2()

    //Mostrar los numeros de un parámetro A (numérico) hasta un parámetro B (numérico). Por ejemplo: los números del 10 al 20

    function intervalo(paramA,paramB){
      for (var i = paramA; i <= paramB; i++){
        console.log(i)
      }
    }
    //intervalo(10,20)
    //intervalo(5,15)
    //intervalo(50,100)

    //Mostrar la sumatoria de los numeros del 1 al 10

    function sumatoria(){
      var suma = 0
      for (var i = 1; i <= 10; i++){
        suma = suma + i // abreviado "suma += i "
      }
      console.log(suma)
    }
    //sumatoria()

    //Mostrar la sumatoria de los numeros de un parámetro A(numérico) hasta un parámetro B(numérico)

    function sumaparam(paramA,paramB){
      var suma = 0
      for (var i = paramA; i <= paramB; i++){
        suma += i
      }
      console.log(suma)
    }
    //sumaparam(2,4)

    //Mostrar todos los elementos del siguiente array ([1,2,3,4,5])

    function mostrarArray(){
      var numeros = [4,5,7,10,45,40,34,42]
      for (var i = 0; i < numeros.length; i++){
        console.log(numeros[i])
      }
    }
    //mostrarArray()

    //Mostrar todos los elementos de un Array ([1,2,3,4,5]) desde la primer posición hasta la mitad del largo

    function mitadArray(){
      var numeros = [5,7,10,45,40,34,42,13]
      //var mitad = numero.length / 2
      for (var i = 0; i < numeros.length/2; i++){
        console.log(numeros[i])
      }
    }

    //mitadArray()

    //Crear un array que contenga los valores numericos del 1 al 100

    function crearArray(){
      var numeros = []
      for (var i = 1; i <= 100; i++){
        numeros.push(i)
      }
      return numeros;
    }
    //crearArray()


    //Crear un array que contenga los valores numericos de un parámetro A hasta un parámetro B(númerico). Por ejemplo: del 10 al 20

    function parametrosArray(paramA,paramB){
      var numeros = []
      for (var i = paramA; i <= paramB; i++){
        numeros.push(i)
      }
      console.log(numeros)
    }
    //parametrosArray(10,20)

    //Ejecutar 8 y Mostrar todos los elementos del Array

    function nueva(){
      var array = crearArray()
      mostrarArrayPorParametro(array)
      //for (var i = 0; i < array.length; i++){
      //  console.log(array[i])
    //  }
    }
    //nueva()

    function mostrarArrayPorParametro(numeros){
      for (var i = 0; i < numeros.length; i++){
        console.log(numeros[i])
      }
    }


    function mostrarTexto(){
      var textos = ['Hola','Chau']
      mostrarArrayPorParametro(textos)
    }
    //mostrarTexto()

    //Mostrar si todos los numeros dentro de un array son pares
    function mostrarArray(){
      var numeros = [4,5,7,10,45,40,34,42,2,5,24,22,40,9,5]
      var pares = 0
      var impares = 0
      for (var i = 0; i < numeros.length; i++){
        if (i % 2 === 0){
          pares++
        }
        else {
          impares++
        }
      }
      console.log('hay:',pares,' numeros pares')
      console.log('hay:',impares,'numeros impares')
    }
    mostrarArray()

    //Crear un objeto que contenga la posición del array como clave
    // y el valor de la posición como valor del objeto.
    //[100,200,300] = {0: 100, 1: 200,3:300}

    var numeros = [100,200,300]
    var obj = {} // i = posicion del array/clave objeto
    for (var i = 0; i < numeros.length; i++){
      var clave = i
      obj[clave] = numeros[i]

    }
    console.log(obj)

    //En base a una palabra, crear un objeto que cuente la cantidad de cada letra
    //Ejemplo: Ingreso  hola => {h:1, o:1, l:1, a:1}

    var palabra = 'pepe'
    var obj = {}
    for (var i = 0; i < palabra.length; i++){
      var letra = palabra[i]
      if (obj[letra]){
        obj[letra]++
      }else {
        obj[letra] = 1
      }
      console.log(letra)
    }
    console.log(obj)
