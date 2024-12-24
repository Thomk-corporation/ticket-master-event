import { useState } from 'react'

function SignupForm() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [phone, setPhone] = useState('')

  console.log('data', name, age, address, zipcode, phone)



  console.log(name)
  return (
    <form>
      <label>
        Name
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Age
        <input value={age} onChange={(event) => setAge(event.target.value)} />
      </label>
      <br />
      <label>
        Address
        <input
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </label>
      <br />
      <label>
        Zipcode
        <input
          value={zipcode}
          onChange={(event) => setZipcode(event.target.value)}
        />
      </label>
      <br />
      <label>
        Phone
        <input
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>
      
    </form>
  )
}

export default SignupForm
