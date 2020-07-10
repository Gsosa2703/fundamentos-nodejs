//const process = required('process');
//No hace falta importarlo ya que process se encuentra en global

//antes de que termina el proceso
process.on('beforeExit', () => {
    console.log('el proceso va a terminar' )
})

//detectamos cuando el queramos salir del programa
process.on('exit', () => {
    //en el exit solo se pueden colocar funciones sincronas ya que este solo existe en el hilo principal
    //si colocamos una funcion asincrona no se va a procesar ya que no se envia al otro hilo
    console.log('Ale, el proceso acabo')
})

//uncaughtException/Rejection : sirve para capturar excepciones que no se ha capturado en todo el proceso 
process.on('uncaughtException', (err, origen) => {
    console.error('se nos olvido capturar un error')
    console.error(err.message)

})

functionquenoeciste()

console.log('si el error no se recoje no sale')
