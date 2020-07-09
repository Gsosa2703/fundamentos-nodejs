function otrafuncion(){
     serompe()
     console.log('tu sabe')
}

function serompe(){
    return 3 + z
}
function seRompeAsincrona(cb){
    setTimeout(()=>{
        //cuando la funcion es asincrona no se puede acceder  a errores fuera de ella se tiene que hcer
        //un try/catch interno
        try{
            return 3 + z
        }catch(err){
            console.error('Error en mi funcion asincrona')
            cb(err)
        }
    })
}

// cuando sabemos que algo puede romperse, lo metemos dentro de un try catch y de esta manera no se rompe el hilo del proceso
try{
    //otrafuncion()
    seRompeAsincrona(()=> {
        console.log('hay error')
    })
} catch (err){
    console.error('We have some problems...')
    console.error(err.message)
    console.log('do not worry, we capture it, the proccess follows')
}

console.log('final')