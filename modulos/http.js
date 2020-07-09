const http = require('http');
//al servidor lo primero que se le pasa es una funcion que tiene request y un response 
http.createServer(router).listen(3000);

function router(req, res) {
    console.info('Nueva Peticion');
    console.log(req.url)

        switch(req.url){
            case '/hola':
                res.write('Holaque tal')
                res.end()
                break;
                default:
                    res.write('Error 404: NO se lo que quieres');
                    res.end()
        }
    //headers
    // res.writeHead(201, {
    //     'Content-Type': 'text/plain'
    // })

    // //escribir respuesta a usuario
    // res.write('hola, ya se usar HTTP de node Js')


    //cierra la peticion
    res.end();
    //para que esto funcione el servidor tiene que escuchar en algun sitio como por ejemplo en cualquier puerto de nuestro sistema 
    //hay unos que estan reservados que solo se pueden usar como administrador, los puertos mas corrientes son los 3000, 3001, 8000, 8080

}
console.log('Escuchando http en el puerto 3000')