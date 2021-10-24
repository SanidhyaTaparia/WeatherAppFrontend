import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect,useState } from 'react'

export default function Login(addtoken) {
  const API_BASE_URL="https://weather--backend.herokuapp.com/"
  const [user_name, setuser_name] = useState("");
  const [user_pass, setuser_pass] = useState("");
  const loginnow = () => {
    if (user_name == "" || user_pass == "") {
        toast.error("Please fill the empty fields.",{position: toast.POSITION.BOTTOM_RIGHT})
        return;
    }
    setuser_name(user_name.trim());
    toast.info("Checking credentials...",{position: toast.POSITION.BOTTOM_RIGHT})
    axios
        .post(API_BASE_URL + "login/",{
            email: user_name,
            password: user_pass
        })
        .then(({ data, status }) => {
            toast.success("Successfully logged in!",{position: toast.POSITION.BOTTOM_RIGHT})
            console.log(data.token)
            addtoken(data.token);
        })
        .catch((err) => {
            toast.error("Cannot Login! :( Check credentials.",{position: toast.POSITION.BOTTOM_RIGHT})
        });
      }

  return(
    <div className="font-sans antialiased bg-grey-lightest bg-green-100 pt-7 pb-20">
    <div className="w-full bg-green fixed shadow z-1">
    </div>
    <div className="w-full bg-grey-lightest pt-2">
      <div className="container mx-auto py-8">
        <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow-2xl">
              <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">Login To Your Account</div>
              <div className="py-4 px-8">
                  <div className="mb-4">
                      <label className="block text-grey-darker text-sm font-bold mb-2" for="email">Email Address</label>
                      <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" value={user_name}
            onChange={(e)=>{setuser_name(e.target.value)}} placeholder="Your email address"/>
                  </div>
                  <div className="mb-4">
                      <label className="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                      <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" value={user_pass}
            onChange={(e)=>{setuser_pass(e.target.value)}} placeholder="Enter your password"/>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                      <button className="rounded-md font-medium text-green-500 hover:text-white bg-white hover:bg-green-500 border-2 border-green-500 ring-4 ring-green-500 ring-opacity-50 m-3" onClick={loginnow} type="submit">Login</button>
                  </div>
              </div>
          </div>
          <p className="text-center my-4">
              <h2 className="text-grey-dark text-md no-underline hover:text-grey-darker font-black" ><a href="/register">Do not have an account? Register</a></h2>
          </p>
      </div>
    </div>
  </div>
  )
}