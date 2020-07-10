const { Z_ASCII } = require("zlib");
const { callbackify } = require("util");

function asincrona(callback){
    setTimeout(()=>{
        try{
            let a = 3 + z ;
            callback(null, a)
        } catch (e){
            callback(e, null)
        }
    }, 1000)
}
asincrona((err, dato)=>{
 if(err){
     console.error('tenemos un error')
     console.error(err)
     return false;
    // throw err NO VA A FUNCIONAR EN FUNCIONES ASINCRONAS
 }

 console.log('todo bien', dato)
})