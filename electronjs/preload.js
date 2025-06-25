const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getCursor: async () => {
    return await ipcRenderer.invoke('get-cursor');
  }
});
