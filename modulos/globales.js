
let i = 0;

let intervalo = setInterval(()=>{
    console.log('Hola')
    if ( i === 2) {
        clearInterval(intervalo)
    }
   i++
}, 1000)

setImmediate(()=> {
console.log('tu sabe')
})