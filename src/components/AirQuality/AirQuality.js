import React from 'react'

const airquality = ({airquality}) => {
    
    const a={airquality}
    console.log("Air Quality=",a["airquality"].data[0]);

    return (
        <div>
                <div>
                    <h1>Location: {airquality["cityname"]}</h1>
                    <table>
                        <tr>
                            <th>Air Quality Index</th>
                            <th>Ozone Level (in micrograms/cubic metres)</th>
                            <th>Sulphe Dioxide Level (in micrograms/cubic metres)</th>
                            <th>Nitrogen Dioxide Level (in micrograms/cubic metres)</th>
                            <th>Carbon Monoxide Level (in micrograms/cubic metres)</th>
                        </tr>

                        <tr>
                           <td>{a["airquality"].data[0].aqi}</td>
                           <td>{a["airquality"].data[0].o3}</td>
                           <td>{a["airquality"].data[0].so2}</td>
                           <td>{a["airquality"].data[0].no2}</td>
                           <td>{a["airquality"].data[0].co}</td>
                        </tr>
                    </table>
                </div>
        </div>
    )
}

export default airquality