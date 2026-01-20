import { app, ipcMain } from 'electron'
import PouchDB from 'pouchdb'
import path from 'node:path'
import fs from 'node:fs'
import { randomUUID } from 'node:crypto'

let dbPath

if (process.platform === 'darwin') {
  // macOS
  dbPath = path.join(app.getPath('appData'), 'dev-clientes', 'my_db')
} else {
  // Windows / Linux
  dbPath = path.join(app.getPath('userData'), 'my_db')
}

// Verificar e criar o diretório se não existir
const dbDir = path.dirname(dbPath)
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true })
}

// Inicializar o banco
const db = new PouchDB(dbPath)

// Função para adicionar cliente no banco
async function addCustomer(doc) {
  const id = randomUUID()

  const data = {
    ...doc,
    _id: id
  }

  try {
    const response = await db.put(data)
    return response
  } catch (err) {
    console.error('ERRO AO CADASTRAR:', err)
  }
}

// IPC Handler
ipcMain.handle('add-customer', async (event, doc) => {
  const result = await addCustomer(doc)
  return result
})
