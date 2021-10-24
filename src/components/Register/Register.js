import React from 'react';
// import { Link } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'

export default function Register() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const registerFieldsAreValid = (
    firstName,
    lastName,
    email,
    username,
    password
  ) => {
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      username === '' ||
      password === ''
    ) {
      toast.error('Please fill all the fields correctly.',{position: toast.POSITION.BOTTOM_RIGHT})
      return false
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      toast.error('Please enter a valid email address.',{position: toast.POSITION.BOTTOM_RIGHT})
      return false
    }
    return true
  }

  const register = (e) => {
    e.preventDefault()

    if (
      registerFieldsAreValid(firstName, lastName, email, username, password)
    ) {
      toast.info('Please wait...',{position: toast.POSITION.BOTTOM_RIGHT})

      const dataForApiRequest = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        password: password,
      }

      axios.post(
        proxyurl +'https://weather--backend.herokuapp.com/register/',
        dataForApiRequest,
      )
        .then(function ({ data, status }) {
          toast.success('Verification link has been sent to email',{position: toast.POSITION.BOTTOM_RIGHT})
        })
        .catch(function (err) {
          toast.warning('An account using same email or username is already created',{position: toast.POSITION.BOTTOM_RIGHT})
        })
    }
  }
  return(
    <div className="font-sans antialiased bg-grey-lightest bg-blue-200">
    <div className="w-full bg-green fixed shadow z-1">
    </div>
    <div className="w-full bg-grey-lightest pt-2">
      <div className="container mx-auto py-8">
        <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow-2xl">
              <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">Register for a free account</div>
              <div className="py-4 px-8">
                  <div className="flex mb-4">
                      <div className="w-1/2 mr-1">
                          <label className="block text-grey-darker text-sm font-bold mb-2" for="first_name">First Name</label>
                          <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" value={firstName}
            onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Your first name"/>
                      </div>
                      <div className="w-1/2 ml-1">
                          <label className="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label>
                          <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" value={lastName}
            onChange={(e) => setLastName(e.target.value)}
             id="last_name" type="text" placeholder="Your last name"/>
                      </div>
                  </div>
                  <div className="mb-4">
                      <label className="block text-grey-darker text-sm font-bold mb-2" for="email">Email Address</label>
                      <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" value={email}
            onChange={(e) => setEmail(e.target.value)}
             id="email" type="email" placeholder="Your email address"/>
                  </div>
                  <div className="mb-4">
                      <label className="block text-grey-darker text-sm font-bold mb-2" for="Username">Username</label>
                      <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="location" value={username}
            onChange={(e) => setUsername(e.target.value)}
             type="text" placeholder="Your location"/>
                  </div>
                  <div className="mb-4">
                      <label className="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                      <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" value={password}
            onChange={(e) => setPassword(e.target.value)}
             id="password" type="password" placeholder="Your secure password"/>
                      <p className="text-grey text-xs mt-1">At least 6 characters</p>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                      <button  onClick={register} className="rounded-md font-medium text-blue-500 hover:text-white bg-white hover:bg-blue-500 border-2 border-blue-500 ring-4 ring-blue-500 ring-opacity-50 m-3" type="submit">Register</button>
                  </div>
              </div>
          </div>
          <p className="text-center my-4">
              <h2 className="text-grey-dark text-md no-underline hover:text-grey-darker font-black">Already have an account? Login</h2>
          </p>
      </div>
    </div>
  </div>
  )
}