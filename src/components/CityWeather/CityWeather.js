import React from 'react'
import "./CityWeather.css"

const CityWeather = () => {
    return (
        <div>
            <div class="bg-blue-200 shadow-2xl p-5 flex">
                <span class="w-auto flex justify-end items-center text-gray-500 p-2">
                    <i class="material-icons text-3xl">search</i>
                </span>
                <input class="w-full rounded p-2" type="text" placeholder="Try 'Los Angeles'" />
                <button class="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
                    <p class="font-semibold text-xs">Search</p>
                </button>
            </div>
        </div>
    )
}

export default CityWeather