import React,{useState,useEffect} from 'react'
import axios from "axios";

const station = () => {
    const [station,setStation]=useState([])

    // const options = {
    // method: 'GET',
    // url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    // params: {
    //     q: 'London,uk',
    //     lat: '0',
    //     lon: '0',
    //     // callback: 'test',
    //     id: '2172797',
    //     lang: 'null',
    //     units: 'imperial',
    //     mode: 'json'
    // },
    // headers: {
    //     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    //     'x-rapidapi-key': '1c4d378973mshc5b9af24f6084b6p1be392jsn5387d813d986'
    // }
    // };

    // useEffect((options)=>{
    //     axios.request(options)
    //         .then(response => {
    //             let vari=response.data
    //             console.log(vari["coord"].lat);
    //             setstation(vari);
    //         }).catch(function (error) {
    //             console.error(error);
    //     });
    // },[])

    useEffect(()=>{
        console.log("useEffect called");
        async function fetchData(){
            const options = {
                    method: 'GET',
                    url: 'https://meteostat.p.rapidapi.com/stations/nearby',
                    headers: {
                        'x-rapidapi-host': 'meteostat.p.rapidapi.com',
                        'x-rapidapi-key': '47cd745e3amshab32e2942dd9b87p1e6fa4jsn14c37e1f98f1'
                    }
                };
            const request=await axios.request(options)
            console.log("Request=",request);
            setStation(request.data)
            // return request
        }
        fetchData();
    },[])

    // let a=axios.request(options)
    //     .then(response => {
    //         return response.data
    //     }).catch(function (error) {
    //         console.error(error);
    // });

    // console.log("A=",a);

    // setstation(a);
    
    console.log("Weather=",setstation);

    return (
        <div>
            let a=Array(station.data)
            {a.fill().map((item)=>{
                <div>
                    <p>Name of Station: {item.name.en}</p>
                    <p>Distance of Station: {item.distance}</p>
                </div>
            })}
        </div>
    )

    }

export default station
