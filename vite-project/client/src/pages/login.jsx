import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../utils/mutations'

import Auth from '../utils/auth'

export default function login(props) {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [login, { error, data }] = useMutation(LOGIN_USER);


  const handleChange = (event) => {
    const { name, value } = event.target

    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)

    try{
      const {data} = await login({
        variables: {...formState}
      })
      Auth.login(data.login.token)
    }catch (e) {
      console.error(e)
    }

    setFormState({
      email: '',
      password: ''
    })
  }

  return (
    <main className='login'>
      <div className='login-container'>
        <h4 className='login-h4'> Login </h4>
        <div className='login-body'>
          {data ? (
            <p>
              You are now logged in now head {''}
              <Link to="/"> back to the homepage.</Link>

            </p>
          ):(
            <form onSubmit={handleFormSubmit}>
              <input 
                className='form-input'
                placeholder='Email:'
                name='email'
                type='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input 
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='login-btn' style={{cursor: 'pointer'}} type='submit'>
                Submit
              </button>

            </form>
          )}
          {error && (
            <div className='error-msg'> {error.message}
            </div>
          )}

        </div>

      </div>
    </main>
  )
}
