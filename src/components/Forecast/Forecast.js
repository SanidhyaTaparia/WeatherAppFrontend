import React from 'react'

const Forecast = ({forecast}) => {
    const f=forecast
    console.log("Forecast=",f["location"]);

    return (
        <div>
             {/* if(typeof forecast !== 'undefined') ){ */}
                <div>
                    <h1>Location: {f["location"].name}</h1>
                    <h2>Latitude: {f["location"].coordinates.latitude}</h2>
                    <h2>Longitude: {f["location"].coordinates.longitude}</h2>
                    <table>
                        <tr>
                            <th>Minimum Temperature</th>
                            <th>Maximum Temperature</th>
                            <th>Min Wind Speed</th>
                            <th>Max Wind Speed</th>
                        </tr>

                        <tr>
                            <td>{f["forecast"].items[0].temperature.min}</td>
                            <td>{f["forecast"].items[0].temperature.max}</td>
                            <td>{f["forecast"].items[0].wind.min}</td>
                            <td>{f["forecast"].items[0].wind.max}</td>
                        </tr>
                    </table>
                </div>
            {/* }  */}
        </div>
    )
}

export default Forecast
