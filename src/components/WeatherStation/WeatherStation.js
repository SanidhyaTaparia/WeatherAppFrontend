import React from 'react'
import "./WeatherStation.css"

const station = ({station}) => {
    const s=station
    console.log("Station =",s);

    let a=Array(s.data)
    // console.log("A=",a[0][0].name.en);
    // var r=a[0].map((item)=>{
        return (
            <div className="bigDi bg-blue-200 p-5">
                {/* <p>Name of Station: {(item).name.en}</p>
                <p>Distance of Station: {(item).distance}</p> */}
                <p className="block font-black md:text-2xl">Name of Station: XYZ</p>
                <p className="block font-black md:text-2xl">Distance of Station: 6 km</p>
            </div>
        )
    // })
    // return (
    //     <div>
    //         {r}
    //     </div>
    // )

    }

export default station