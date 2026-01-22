import { useRef } from 'react'
import '../styles/create.css'

export default function Create() {
  // async function handleAddCustomer() {
  //   const doc = {
  //     name: 'fvnhmf',
  //     email: 'sahudiuashun jadhuf9hdoaijcohsdouvhisjdfojdsf',
  //     phone: '67999999',
  //     address: 'Rua X, centro',
  //     role: 'Frontend',
  //     status: true
  //   }

  //   const response = await window.api.addCustomer(doc)
  //   console.log(response)
  // }
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const adressRef = useRef(null)
  const phoneRef = useRef(null)
  const roleRef = useRef(null)

  async function handleAddCustomer(e) {
    e.preventDefault()

    const name = nameRef.current.value
    const email = emailRef.current.value
    const adress = adressRef.current.value
    const phone = phoneRef.current.value
    const role = roleRef.current.value

    if (!name || !email || !adress || !phone || !role) {
      alert('Preencha todos os campos')
      return
    }

    const doc = {
      name,
      email,
      adress,
      phone,
      role,
      status: true
    }

    await window.api.addCustomer(doc)

    nameRef.current.value = ''
    emailRef.current.value = ''
    adressRef.current.value = ''
    phoneRef.current.value = ''
    roleRef.current.value = ''
  }

  return (
    <div>
      <h1>dishifvjsodv</h1>
    </div>
  )
}
