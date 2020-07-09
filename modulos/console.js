///agrupa varios console 
console.group('Tipos de console:')

 //lo que sea
 console.log('Log')

//muestra informacion
console.info('Info')

// muestra un error
console.error('Error')

//muestra una advertencia
console.warn('warn')

//finaliza el console group:
console.groupEnd('Tipos de console:')

//muestra datos en forma de table
let tabla = [ {
    a:1,
    b:'Z'
}, 
{
    a: 2,
    b: "Y"
}]

console.table(tabla)

//el console.group se puede usar dentro de funciones

function function1 () {
    console.group('funcion 1');
    console.log('Esto es de la funcion 1')
    console.log('Esto tambien')
    funcion2()
    console.log('He vuelto a la 1')
    console.groupEnd('function 1')
    //
}

function funcion2(){
    console.group('function2')
    console.log('ahora estamos en function 2')
    console.groupEnd('function 2')
    //
}

console.log('empezamos')

function1()

///cuenta la cantidad de veces que se ejecuta algo:

console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
console.count('veces')


/// determina el tiempo que demora un proceso en ocurrir
console.time("10 elementos")
for (let i = 0; i< 100; i++){

}
console.timeEnd('10 elementos')