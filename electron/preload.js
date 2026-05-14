const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('nexus', {
  platform: process.platform,
  versions: {
    node:     process.versions.node,
    chrome:   process.versions.chrome,
    electron: process.versions.electron,
  },
  // Generic invoke bridge — renderer calls window.nexus.invoke(channel, payload)
  // Main process handles each channel via ipcMain.handle(channel, ...)
  invoke: (channel, data) => ipcRenderer.invoke(channel, data),
})
