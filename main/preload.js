const { contextBridge ,ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  "ipcApi", {
    handleMessage: async (message) => {
      return await ipcRenderer.invoke("message", message);
    }
  }
)
