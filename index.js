const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
	let mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden-inset',
		resizable: false,
		frame:false,
        width: 1024,
		height: 730,
		
	});
	
	// to open a local file
	// from the browser window you can use whatever npm package
	mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.setMenuBarVisibility(false);
    

	mainWindow.webContents.on('will-navigate', (e, url) => {
		e.preventDefault();
		//console.log(url);
		
		mainWindow.webContents.send('open-file', url);
	});
});