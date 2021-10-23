import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div id="menuToggle" className="inline-block p-3 bg-gray-200">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu" className="font-bold gap-y-80 leading-10 md:text-left">
                    <Link to="/currentWeather"><h2 className="text-white hover:text-blue-500 transition ease-in-out duration-500">Current Weather</h2></Link>
                    <Link to="/forecast"><h2 className="text-white hover:text-blue-500 transition ease-in-out duration-500">Weather Forecast</h2></Link>
                    <Link to="/cityWeather"><h2 className="text-white hover:text-blue-500 transition ease-in-out duration-500">Search Weather By City</h2></Link>
                    <Link to="/weatherStation"><h2 className="text-white hover:text-blue-500 transition ease-in-out duration-500">Nearby Weather Stations</h2></Link>
                    <Link to="/tidalLength"><h2 className="text-white hover:text-blue-500 transition ease-in-out duration-500">Tidal Length </h2></Link>
                    <Link to="/airQuality"><h2 className="text-white hover:text-blue-500 transition ease-in-out duration-500">Air Quality</h2></Link>
                </ul>
                <h1 className="font-sans inline-block
                      bg-gradient-to-r
                      from-green-500
                      to-blue-500
                      text-transparent
                      bg-clip-text font-bold md:text-5xl sm:text-3xl">Weather App</h1>
                {/* <div className="loginRegister inline-block float-right sm:text-xs md:text-lg">
                    <button className="rounded-md font-medium text-blue-500 hover:text-white bg-white hover:bg-blue-500 border-2 border-blue-500 ring-4 ring-blue-500 ring-opacity-50 m-3">Register</button>
                    <button className="rounded-md font-medium text-green-500 hover:text-white bg-white hover:bg-green-500 border-2 border-green-500 ring-4 ring-green-500 ring-opacity-50 m-3">Login</button>
                </div> */}
            </div>
        </div>
    )
}

export default Header
