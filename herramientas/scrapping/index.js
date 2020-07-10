const puppetter = require('puppeteer');
//puppetter es asincrono
//para hacer una funcion autoejecutable la encerramos entre parentesis para convertirla en una expresion
//y luego la llamamos
(async ()=> {
    console.log('Lanzamos navegador')
    //const browser = await puppetter.launch();
    const browser = await puppetter.launch({headless:false});

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js')
    var titulo1 = await page.evaluate(()=>{
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
    })
    console.log('Cerramos navegador')
    //browser.close()
    console.log(' navegador cerrado')

})();