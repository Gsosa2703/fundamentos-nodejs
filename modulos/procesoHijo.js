//Exec nos permite acceder a mas de una propiedad en el child process
const {exec, spawn} = require('child_process')


// exec('node modulos/console.js', (err, stdout, sterr) => {
//     if (err){
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// })


//node esta orientado a eventos 

let proceso = spawn('ls', ['-la']);
console.log(proceso.pid)
console.log(proceso.connected);

proceso.stdout.on('data', function (dato) {
    console.log('esta muerto?')
    console.log(process.killed);
    console.log(dato.toString())
})

proceso.on('exit', ()=> {
    console.log('el proceso termino')
} )
