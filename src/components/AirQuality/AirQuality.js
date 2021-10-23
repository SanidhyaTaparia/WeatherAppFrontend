import React,{useState,useEffect} from 'react'
import axios from "axios";

const airquality = () => {
    const [airquality,setAirquality]=useState([])

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
    //             setairquality(vari);
    //         }).catch(function (error) {
    //             console.error(error);
    //     });
    // },[])

    useEffect(()=>{
        console.log("useEffect called");
        async function fetchData(){
            const options = {
                    method: 'GET',
                    url: 'https://air-quality.p.rapidapi.com/current/airquality',
                    params:{lon: '-73.00597', lat: '40.71427'},
                    headers: {
                        'x-rapidapi-host': 'air-quality.p.rapidapi.com',
                        'x-rapidapi-key': '47cd745e3amshab32e2942dd9b87p1e6fa4jsn14c37e1f98f1'
                    }
                };
            const request=await axios.request(options)
            console.log("Request=",request);
            setAirquality(request.data)
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

    // setairquality(a);
    
    console.log("Weather=",setairquality);

    return (
        <div>
            if(typeof airquality !== 'undefined') ){
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
                           <td>{airquality.data[0].aqi}</td>
                           <td>{airquality.data[0].o3}</td>
                           <td>{airquality.data[0].so2}</td>
                           <td>{airquality.data[0].no2}</td>
                           <td>{airquality.data[0].co}</td>
                        </tr>
                    </table>
                </div>
            }
        </div>
    )
}

export default airquality
