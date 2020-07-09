
// File System: permite acceder,crear, eliminar a archivos de nuestro sistema. 
//Se trae el modulo mediante el require con solo pasarle fs ya que este se encuentra en el core de node
const fs = require('fs');

//Es recomendable  hacer todo de forma sincrona para no bloquear el proceso principal


function leer(ruta, callback){
    //readFile recibe de parametros la ruta donde se va a leer el archivo y un callback que recibe de parametro
    //el error y la data 

    //Usar readFile siempre que sea posible, readFileSync bloquea el hilo mientras la solicitud es resuelta
    fs.readFile(ruta, (err, data)=> {
        callback(data.toString())
    })

}
//leer(__dirname + '/archivo.txt', console.log)

function escribir (ruta, contenido, callback){
    fs.writeFile(ruta, contenido, (error)=>{
        if (error){
            console.error('NO he podido escribirlo', error)
        }else {
            callback('Se escribio correctamente')
        }
    })
}

function borrar(ruta, cb){
    fs.unlink(ruta, cb)
    
}

//escribir(__dirname + '/archivo1.txt', "soy un archivo nuevo", console.log)
borrar(__dirname + '/archivo1.txt', console.log)
