import React from 'react'
// import axios from "axios";

const CurrentWeather = ({weather}) => {
    const k={weather}
    const w=k.weather
    console.log("w=",w);
    console.log("Type of w=",typeof w);
    
    return (
        <div className="bg-blue-200 p-5">
            {/* if(typeof weatherData !== 'undefined') ) */}
            {
                <div>
                    <div className="block m-5 text-center">
                        <h1 className="block font-black md:text-3xl">Location: {w["name"]}</h1>
                        <h2 className="block font-black md:text-3xl">Latitude: {w["coord"].lat}</h2>
                        <h2 className="block font-black md:text-3xl">Longitude: {w["coord"].lon}</h2>
                    </div>
                    <div className="shadow-2xl pt-3 table w-full bg-white table-auto border-collapse border-4 border-green-800 rounded-lg contents-center">
                        <div className="table-row-group">
                            <div className="table-row">
                                <div className="table-cell border border-green-600">Temperature</div>
                                <div className="table-cell border border-green-600">Min Temp</div>
                                <div className="table-cell border border-green-600">Max Temp</div>
                                <div className="table-cell border border-green-600">Humidity</div>
                                <div className="table-cell border border-green-600">Pressure</div>
                                <div className="table-cell border border-green-600">Wind Speed</div>
                            </div>
                            <div className="table-row">
                                <div className="table-cell border border-green-600">{w["main"].temp}</div>
                                <div className="table-cell border border-green-600">{w["main"].temp_min}</div>
                                <div className="table-cell border border-green-600">{w["main"].temp_max}</div>
                                <div className="table-cell border border-green-600">{w["main"].humidity}</div>
                                <div className="table-cell border border-green-600">{w["main"].pressure} atm</div>
                                <div className="table-cell border border-green-600">{w["wind"].speed}</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CurrentWeather
