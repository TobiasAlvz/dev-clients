const { Menu, Tray, nativeImage, app } = require('electron')
const path = require('node:path')

let tray = null

function getTrayIcon() {
  // DEV
  if (!app.isPackaged) {
    return path.resolve(process.cwd(), 'src', 'main', 'resources', 'icon.ico')
  }

  // BUILD
  return path.join(process.resourcesPath, 'resources', 'icon.ico')
}

function createTray(window) {
  if (tray) return tray

  // Windows precisa disso - app já está importado acima
  app.setAppUserModelId('com.devclientes.app')

  const iconPath = getTrayIcon()
  const icon = nativeImage.createFromPath(iconPath)

  if (icon.isEmpty()) {
    console.error('❌ Ícone do tray inválido:', iconPath)
  }

  tray = new Tray(icon)

  const menu = Menu.buildFromTemplate([
    { label: 'Dev Clientes', enabled: false },
    { type: 'separator' },
    {
      label: 'Cadastrar cliente',
      click: () => {
        window.show()
        window.focus()
        window.webContents.send('new-customer')
      }
    },
    {
      label: 'Abrir',
      click: () => window.show()
    },
    { type: 'separator' },
    {
      label: 'Sair',
      role: 'quit'
    }
  ])

  tray.setToolTip('Dev Clientes')
  tray.setContextMenu(menu)

  tray.on('click', () => {
    window.isVisible() ? window.hide() : window.show()
  })

  return tray
}

module.exports = { createTray }
