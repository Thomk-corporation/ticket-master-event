import { useState } from 'react'
import axios from 'axios'

function SignupForm() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')



  function validateForm () {
    const validateName = /^[a-zA-Z\s]+$/;
    const validateAge = Number(age);
    const validateZipcode = /^[0-9]+$/
    const validatePhone = /^[0-9]{10}$/

    if (!validateName.test(name)) {
      return 'El nombre solo puede contener letras.'
    }
    if (isNaN(validateAge) || validateAge < 0 && validateAge < 150) {
      return 'La edad debe estar entre 0 y 150'
    }
    if (!validateZipcode.test(zipcode)) {
      return 'El codigo postal solo puede tener numeros'
    }
    if (!validatePhone.test(phone)) {
      return 'El telefono debe contener numeros y debe ser de 10 digitos'
    }
    return ""
  }

  function handleClearClick() {
    setName('')
    setAge('')
    setAddress('')
    setZipcode('')
    setPhone('')
  }

  async function handleSubmitForm(event) {
    event.preventDefault()

    setError("")
    setSuccess("")

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    const newUser = {
      name,
      age: Number(age),
      address,
      zipcode,
      phone
    };

    try {
      const response = await axios.post('http://localhost:5000/api/user', newUser);
      setSuccess(response.data.message);
      handleClearClick();

    } catch (error) {
      setError(error.response.data.message)
        console.log(error)
    }

  }

  return (
    <form onSubmit={handleSubmitForm}>
      {success && <div style={{ color: 'green' }}>{success}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <label>
        Name: 
        <input
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Age: 
        <input
          type='number'
          value={age}
          onChange={(event) => setAge(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Address: 
        <input
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Zipcode: 
        <input
          type='text'
          value={zipcode}
          onChange={(event) => setZipcode(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Phone: 
        <input
          type='text'
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
