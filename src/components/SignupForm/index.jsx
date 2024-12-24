import { useState } from 'react'

function SignupForm() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [phone, setPhone] = useState('')

  function handleClearClick() {
    setName('')
    setAge('')
    setAddress('')
    setZipcode('')
    setPhone('')
  }

  function handleSubmitForm(event) {
    event.preventDefault()

    console.log(
      'Name:',
      name,
      'Age:',
      age,
      'Address:',
      address,
      'Zipcode:',
      zipcode,
      'Phone:',
      phone,
    )
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <label>
        Name
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Age
        <input
          value={age}
          onChange={(event) => setAge(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Address
        <input
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Zipcode
        <input
          value={zipcode}
          onChange={(event) => setZipcode(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Phone
        <input
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      </label>
      <div>
        <button type='button' onClick={handleClearClick}>
          Clear
        </button>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default SignupForm
