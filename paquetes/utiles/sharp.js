const sharp = require ('sharp');

sharp('unnamed.png')
.resize(80)
.toFile('resized.png')


/*

Un buffer es un monton de datos y nun stream es un proceso donde pasan un monton de datos
La información en memoria esta pensada para ser escrita rapida pero borrada tambien rapida.
La información almacenada en disco puede ser almacenada durante mucho mas tiempo pero es mucho mas lento escribir y leer en ellos.



*/