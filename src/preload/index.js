const { contextBridge, ipcRenderer } = require('electron')

const api = {
  onNewCustomer: (callback) => {
    ipcRenderer.on('new-customer', callback)

    // função de cleanup
    return () => {
      ipcRenderer.off('new-customer', callback)
    }
  },

  fetchUsers: () => {
    return ipcRenderer.invoke('fetch-users')
  }
}

contextBridge.exposeInMainWorld('api', api)
