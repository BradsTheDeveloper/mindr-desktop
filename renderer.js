// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const myNotification = new Notification('Title', {
    body: 'Notification from the Renderer process'
})
  
myNotification.onclick = () => {
    console.log('Notification clicked')
}

//const customTitlebar = require('custom-electron-titlebar');

//new customTitlebar.Titlebar({
//	backgroundColor: customTitlebar.Color.fromHex('#444')
//});

