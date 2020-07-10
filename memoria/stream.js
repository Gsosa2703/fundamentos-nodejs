///Streams es el paso de datos entre un lugar a otro. Hay tres tipos de streams
//stream de lectura que es el que lee los datos
//stream de escritura, tengo un stream con destino que este strean esta recibiendo datos y los va escribiendo

const fs = require('fs');
const stream = require('stream')
const util = require('util');
const { createBrotliCompress } = require('zlib');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

// readableStream.setEncoding('utf8')
// readableStream.on('data', (chunk)=>{
// data += chunk
// })

// readableStream.on('end', ()=>{
//     console.log(data)
// })

///stdout es un buffer de escritura 
// process.stdout.write('hola ')
// process.stdout.write('jij')

const Transform = stream.Transform;

function Mayus(){
    Transform.call(this)

}
util.inherits(Mayus, Transform)

Mayus.prototype._transform = function(chunk, codif, callback){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus)
    callback()
}

let mayus = new Mayus ();

readableStream 
.pipe(mayus)
.pipe(process.stdout)


