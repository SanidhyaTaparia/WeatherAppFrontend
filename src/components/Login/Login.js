import React from 'react';
// import { Link } from 'react-router-dom'

export default function Login() {
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
                      <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email address"/>
                  </div>
                  <div className="mb-4">
                      <label className="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                      <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Enter your password"/>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                      <button className="rounded-md font-medium text-green-500 hover:text-white bg-white hover:bg-green-500 border-2 border-green-500 ring-4 ring-green-500 ring-opacity-50 m-3" type="submit">Login</button>
                  </div>
              </div>
          </div>
          <p className="text-center my-4">
              <h2 className="text-grey-dark text-md no-underline hover:text-grey-darker font-black">Do not have an account? Register</h2>
          </p>
      </div>
    </div>
  </div>
  )
}