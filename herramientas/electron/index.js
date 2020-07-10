const {app, BrowserWindow}= require('electron');
//se trae la aplicacion y la ventana principal

let mainWindow;

app.on('ready', createWindow)

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 800,
        height: 900,
    });
    mainWindow.loadFile('index.html')
}