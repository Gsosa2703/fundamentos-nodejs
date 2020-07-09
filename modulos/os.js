const os = require('os');


//coloca el tipo arquitectura de tu maquina 
console.log(os.arch())

//ver la plataforma donde estas corriendo tu codigo

console.log(os.platform())

//accedo a la informacion de las cpus en la que esta corriendo mi sistema
console.log(os.cpus().length)

//ver los errores del sistema
console.log(os.constants)

//ver la memoria del sistema
//totalmem devuelve el espacio total de tu memoria y freemen la memoria disponible

const SIZE = 1024;
function kb(bytes){return bytes /SIZE}
function mb(bytes){return kb(bytes) /SIZE}
function gb(bytes){return mb(bytes) /SIZE}

console.log(os.freemem())
console.log(kb(os.freemem()))
console.log(mb(os.freemem()))
console.log(gb(os.freemem()))

//muestra el directorio raiz del usuario
console.log(os.homedir())
//muestra el directorio de archivos temporales
console.log(os.tmpdir())

//sabemos cual es host name 
console.log(os.hostname);


