//Si no necesito el valor de la variable dentro de la aplicacion uso variables de entorno 

let nombre = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || 'no tengo web';
console.log(`Hola ${nombre}`)
console.log(`Mi web es ${web}`)
