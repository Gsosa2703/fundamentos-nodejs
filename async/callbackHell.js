
//agregamos setTimeOut a la funcion para hacerla asincrona 

function hola(nombre, callback){
    setTimeout(() => {
        console.log(`Hola ${nombre}`)
        callback(nombre)
    }, 1000)
    
}

function hablar(callbackHablar){
    setTimeout(()=> {
        console.log('bla bla bla bla')
        callbackHablar()
    }, 1000)
}
function adios(nombre, callback){
    setTimeout(()=>{
        console.log(`Adios ${nombre}`)
        callback()
    }, 1000)
}

//Para evitar un callbackHell(muchas funciones anidadas dentro de otras), lo primero que hay que hacer
//es crear funciones intermedias que tienen funcionalidades especificas
//Por esto se crea la funcion conversacion que va a recibir por parametro el nombre que necesitan las demas funciones
//el numero de veces que se va a ejecutar y un callback

function conversacion(nombre, veces, callback){
    //Una de las formas de anidar las funciones hola y adios dentro de conversacion es usando la 
    //recursividad que es llamar a la misma funcion dentro de ella pero con informacion ligermanente distinta ejm:
    if(veces > 0){
        hablar(()=>{
            conversacion(nombre, --veces, callback)
        })
    }else {
        adios(nombre, callback)
    }

}
//-- 

console.log('Iniciando proceso...')

 hola('Gaby', (nombre)=>{
     conversacion(nombre, 2, ()=>{
         console.log('Proceso terminado')
     })
     })

// hola('Gaby', (nombre)=>{
//     hablar(()=> {
//         hablar(()=>{
//             adios(nombre, ()=>{
//                 console.log('Terminando proceso...')
//             })
//         })   

//     })  
// })

