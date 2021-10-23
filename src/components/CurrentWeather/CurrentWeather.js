import React from 'react'
// import axios from "axios";

const CurrentWeather = ({weather}) => {
    const k={weather}
    const w=k.weather
    console.log("w=",w);
    console.log("Type of w=",typeof w);

    return (
        <div>
             {/* if(typeof w !== 'undefined') ){ */}
                <div>
                    <h1>Location: {w["name"]}</h1>
                    <h2>Latitude: {w["coord"].lat}</h2>
                    <h2>Longitude: {w["coord"].lon}</h2>
                    <table>
                        <tr>
                            <th>Temperature</th>
                            <th>Minimum Temperature</th>
                            <th>Maximum Temperature</th>
                            <th>Humidity</th>
                            <th>Pressure</th>
                            <th>Wind Speed</th>
                        </tr>

                        <tr>
                            <td>{w["main"].temp}</td>
                            <td>{w["main"].temp_min}</td>
                            <td>{w["main"].temp_max}</td>
                            <td>{w["main"].humidity}</td>
                            <td>{w["main"].pressure}</td>
                            <td>{w["wind"].speed}</td>
                        </tr>
                    </table>
                </div>
            {/* }  */}
        </div>
    )
}

export default CurrentWeather
