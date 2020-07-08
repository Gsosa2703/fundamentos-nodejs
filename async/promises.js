
//La principal diferencia entre los callblacks y las promesas es que las promesas se pueden ir anidando


function hola(nombre){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`)
            resolve(nombre)
        }, 1500)
    })
 
    
}

function hablar(nombre){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=> {
            console.log('bla bla bla bla')
            //resolve(nombre)
            reject('error')
        }, 1000)
    })
  
}
function adios(nombre){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Adios ${nombre}`)
            resolve(nombre)
        }, 1000)
    })
  
}

//--
console.log('iniciando el proceso...')
hola('Paola')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre)=>{
    console.log('terminado el proceso')
    }).catch(error => {
        console.error(error)
    })