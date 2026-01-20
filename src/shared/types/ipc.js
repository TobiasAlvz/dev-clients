export default function creatCustomer(data) {
  return {
    _id: data._id || undefined,
    _rev: data._rev || undefined,

    name: String(data.name || '').trim(),
    email: String(data.email || '')
      .trim()
      .toLowerCase(),
    role: String(data.role || '').trim(),

    status: Boolean(data.status),

    address: data.address ? String(data.address).trim() : undefined,
    phone: data.phone ? String(data.phone).trim() : undefined
  }
}

export function Customer(customer) {
  return (
    typeof customer === 'object' &&
    typeof customer._id === 'string' &&
    typeof customer.name === 'string' &&
    customer.name.length > 0 &&
    typeof customer.email === 'string' &&
    customer.email.includes('@') &&
    typeof customer.role === 'string' &&
    typeof customer.status === 'boolean'
  )
}

export function NewCustomer(data) {
  return (
    typeof data === 'object' &&
    typeof data.name === 'string' &&
    data.name.length > 0 &&
    typeof data.email === 'string' &&
    data.email.includes('@') &&
    typeof data.role === 'string' &&
    typeof data.status === 'boolean'
  )
}
