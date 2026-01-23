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

async function fetchAllCustomers() {
  try {
    const result = await db.allDocs({ include_docs: true })
    // evito que ele me retorne ull, undefined
    return result.rows.map((row) => row.doc).filter(Boolean)
  } catch (err) {
    console.error('Erro ao buscar', err)
  }
}

ipcMain.handle('fetch-all-customers', async () => {
  return await fetchAllCustomers()
})

// Buscar cliente pelo ID
async function fetchCustomerById(docId) {
  try {
    const doc = await db.get(docId)
    return doc
  } catch (err) {
    console.error('ERRO AO BUSCAR PELO ID:', err)
    return null
  }
}
ipcMain.handle('fetch-customer-id', async (_event, docId) => {
  return await fetchCustomerById(docId)
})

// criar, ler, atulizar, deletar
async function deleteCustomer(docId) {
  try {
    const doc = await db.get(docId)
    const result = await db.remove(doc._id, doc._rev)
    return result
  } catch (err) {
    console.error('ERRO AO DELETAR PELO ID:', err)
    return null
  }
}
ipcMain.handle('delete-customer', async (_event, docId) => {
  return await deleteCustomer(docId)
})

async function updateCustomer(upadateData) {
  try {
    const doc = await db.get(upadateData._id)

    const newDoc = {
      ...doc,
      ...upadateData,
      _rev: doc._rev
    }

    return await db.put(newDoc)
  } catch (err) {
    console.error('Erro ao atulizar', err)
  }
}

ipcMain.handle('update-customer', async (_event, data) => {
  return await updateCustomer(data)
})
