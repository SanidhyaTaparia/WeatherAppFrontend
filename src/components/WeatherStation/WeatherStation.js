import React from 'react'
import "./WeatherStation.css"

const station = ({station}) => {
    const s=station
    console.log("Station =",s);

    let a=Array(s.data)
    console.log("A=",a[0][0].name.en);
    var r=a[0].map((item)=>{
        return (
            <div className="bigDiv">
                <p>Name of Station: {(item).name.en}</p>
                <p>Distance of Station: {(item).distance}</p>
            </div>
        )
    })
    return (
        <div>
            {r}
        </div>
    )

    }

export default station