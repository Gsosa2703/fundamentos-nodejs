const bcrypt = require('bcrypt');

const password = '1234Segura!';


bcrypt.hash(password, 5, (err, hash)=>{
    console.log(hash);
    //pregunta si el hash y la password son iguales
    bcrypt.compare(password, hash, (err, res)=> {
        console.log(res)
        console.log(err)
    })
})

//bycript funciona con promesas, es 100% asincrono