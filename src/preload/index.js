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
  },

  fetchAllCustomers: () => {
    return ipcRenderer.invoke('fetch-all-customers')
  },

  addCustomer: (doc) => {
    return ipcRenderer.invoke('add-customer', doc)
  },

  fetchCustomerById: (docId) => {
    return ipcRenderer.invoke('fetch-customer-id', docId)
  },
  deleteCustomer: (docId) => {
    return ipcRenderer.invoke('delete-customer', docId)
  },
  gerVersionApp: () => ipcRenderer.invoke('get-version-app')
}

contextBridge.exposeInMainWorld('api', api)
