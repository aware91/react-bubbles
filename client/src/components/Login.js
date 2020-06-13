import React, { useState, useEffect } from "react";
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
      .post('/login', credentials)
      .then(res=> {
        console.log('Login.js=>handleLogin=>res', res)
        setTimeout(()=>{
          setIsLoading(false);
          setError('')
          localStorage.setItem('token', res.data.payload)
          props.history.push('/protected')
        }, 300)
      })
      .catch(err=>{
        setIsLoading(false)
        console.log('Loading.js=>handleLogin=>err', err)
        setError('Invalid Login')
      })
      setCredentials({})
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Login</p>
      <h2 style={{ color: 'red' }}>{error}</h2>
      {isLoading ? (
        <h2>Loading</h2>
      ): (
        <form onSubmit={handleLogin}>
          <input 
            type='text'
            placeholder='Username'
            name='username'
            value={credentials.username}
            onChange={handleChange}
          />
          <input 
            type='password'
            placeholder='Password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
          />
          <button type='submit'>Login</button>
        </form>
      )} 
    </>
  );
};

export default Login;
