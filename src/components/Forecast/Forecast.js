import React from 'react'

const Forecast = ({forecast}) => {
    const f=forecast
    console.log("Forecast=",f["location"]);

    return (
        <div className="bg-blue-200 p-5">
            <div className="block m-5 text-center">
                <h1 className="block font-black md:text-3xl">Location: {f["location"].name}</h1>
                <h2 className="block font-black md:text-3xl">Latitude: {f["location"].coordinates.latitude}</h2>
                <h2 className="block font-black md:text-3xl">Longitude: {f["location"].coordinates.longitude}</h2>
            </div>
            <div className="shadow-2xl pt-3 table w-full bg-white table-auto border-collapse border-4 border-green-800 rounded-lg contents-center">
                <div className="table-row-group">
                    <div className="table-row">
                        <div className="table-cell border border-green-600">Min Temp</div>
                        <div className="table-cell border border-green-600">Max Temp</div>
                        <div className="table-cell border border-green-600">Min Wind Speed</div>
                        <div className="table-cell border border-green-600">Max Wind Speed</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell border border-green-600">{f["forecast"].items[0].temperature.min}</div>
                        <div className="table-cell border border-green-600">{f["forecast"].items[0].temperature.max}</div>
                        <div className="table-cell border border-green-600">{f["forecast"].items[0].wind.min}</div>
                        <div className="table-cell border border-green-600">{f["forecast"].items[0].wind.max}</div>
                    </div>
                </div>
            </div>
            {/* }  */}
        </div>
    )
}

export default Forecast
