import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className="navbar">
                <Link to="/"><h2> Current Weather </h2></Link>
                <Link to="/forecast"><h2>Weather Forecast</h2></Link>
                <Link to="/cityWeather"><h2>Search Weather By City</h2></Link>
                <Link to="/weatherStation"><h2>Nearby Weather Stations</h2></Link>
                <Link to="/tidalLength"><h2>Tidal Length </h2></Link>
                <Link to="/airQuality"><h2>Air Quality</h2></Link>
            </div>
        </div>
    )
}

export default Header
