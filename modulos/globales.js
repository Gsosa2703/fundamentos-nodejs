
let i = 0;
saludar()
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

function saludar(){
    console.log('epale')
}
console.log(this === global)