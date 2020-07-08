//La sintaxis async-await nos permite crear una funcion de forma explicita como asrincrona y poder esperar que esa funcion termine
//A nivel tecnico no bloquea el hilo principal, ya que este va a seguir escuchando nuevas peticiones 
//await solo esta permitido dentro de funciones asincronas no en el scope global


async function hola(nombre){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`)
            resolve(nombre)
        }, 1500)
    })
 
    
}

async function hablar(nombre){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=> {
            console.log('bla bla bla bla')
            resolve(nombre)
            //reject('error')
        }, 1000)
    })
  
}
async function adios(nombre){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Adios ${nombre}`)
            resolve(nombre)
        }, 1000)
    })
  
}

async function main(){
   let nombre = await hola('Gaby');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
     console.log('terminamos')
}
console.log('Empezamos el proceso')

 main()
 console.log('segundo')