import React from 'react'

const airquality = ({airquality}) => {
    
    const a={airquality}

    return (
        <div className="bg-blue-200 p-5">
                <div>
                    <h1 className="block font-black md:text-3xl m-5">Location: London</h1>
                    
                    <div className="shadow-2xl pt-3 table w-full bg-white table-auto border-collapse border-4 border-green-800 rounded-lg contents-center">
                            <div className="table-row-group">
                                <div className="table-row">
                                    <div className="table-cell border border-green-600">Air Quality Index</div>
                                    <div className="table-cell border border-green-600">Ozone Level (in micrograms/cubic metres)</div>
                                    <div className="table-cell border border-green-600">Sulphe Dioxide Level (in micrograms/cubic metres)</div>
                                    <div className="table-cell border border-green-600">Nitrogen Dioxide Level (in micrograms/cubic metres)</div>
                                    <div className="table-cell border border-green-600">Carbon Monoxide Level (in micrograms/cubic metres)</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell border border-green-600">{a["airquality"].data[0].aqi}</div>
                                    <div className="table-cell border border-green-600">{a["airquality"].data[0].o3}</div>
                                    <div className="table-cell border border-green-600">{a["airquality"].data[0].so2}</div>
                                    <div className="table-cell border border-green-600">{a["airquality"].data[0].no2}%</div>
                                    <div className="table-cell border border-green-600">{a["airquality"].data[0].co} atm</div>
                                </div>
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default airquality