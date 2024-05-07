import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';


export default function register() {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [addProfile, {error, data }] = useMutation(ADD_PROFILE)
  

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    })
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)

    try{
      const { data } = await addProfile({
        variables: {...formState}
      });
      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <main>
      <div className='signup-container'>
        <h1 className='signup'> Signup </h1>
        <div className='card-body'>
          {data ? (
          <p>
            You are signed up head {''}
            <Link to="/"> Back to the homepage.</Link>
          </p>
          ):( 
          <form onSubmit={handleFormSubmit}>
            <input 
              className='form-input'
              placeholder='Name:'
              name='name'
              type='text'
              value={formState.name}
              onChange={handleChange}
            />
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
            <button 
              className='sign-btn'
              style={{ cursor: 'pointer'}}
              type='submit'
            > 
            Submit
            </button>
          </form>
          )}
          {error && (
            <div className='error-msg'> {error.message} </div>
          )}
        </div>
      </div>
    </main>

  )
}
