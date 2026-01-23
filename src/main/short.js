import { app, globalShortcut } from 'electron'

export function createShortcuts(window) {
  app.whenReady().then(() => {
    const registered = globalShortcut.register('CommandOrControl+N', () => {
      window.webContents.send('new-customer')
    })

    if (!registered) {
      console.log('Falha ao registrar atalho CommandOrControl+N')
    }
  })

  app.on('will-quit', () => {
    globalShortcut.unregister('CommandOrControl+N')
  })
}
