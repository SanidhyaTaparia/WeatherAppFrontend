import './App.css';
import Header from './components/Header/Header';
import React,{useState,useEffect} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Forecast from './components/Forecast/Forecast';
import AirQuality from './components/AirQuality/AirQuality';
import WeatherStation from './components/WeatherStation/WeatherStation';
import axios from "axios";


function App() {
  const [weather,setWeather]=useState([])
  const [forecast,setForecast]=useState([])
  const [airquality,setAirquality]=useState([])
  const [station,setStation]=useState([])

//   useEffect(()=>{
//     console.log("useEffect called");
//     async function fetchData(){
//         const options = {
//                 method: 'GET',
//                 url: 'https://community-open-weather-map.p.rapidapi.com/weather',
//                 params: {
//                     q: 'London,uk',
//                     lat: '0',
//                     lon: '0',
//                     // callback: 'test',
//                     id: '2172797',
//                     lang: 'null',
//                     units: 'imperial',
//                     mode: 'json'
//                 },
//                 headers: {
//                     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//                     'x-rapidapi-key': '92892ab54amshf55ba9722bf8547p1eedb8jsn24eaeb644984'
//                 }
//             };
//         const request=await axios.request(options)
//         console.log("Weather Request=",request.data);
//         setWeather(request.data)
//         // return request
//     }
//     fetchData();
// },[])

// useEffect(()=>{
//   console.log("useEffect called");
//   async function fetchData(){
//       const options = {
//               method: 'GET',
//               url: 'https://forecast9.p.rapidapi.com/rapidapi/forecast/Berlin/summary/',
//               headers: {
//                   'x-rapidapi-host': 'forecast9.p.rapidapi.com',
//                   'x-rapidapi-key': '92892ab54amshf55ba9722bf8547p1eedb8jsn24eaeb644984'
//               }
//           };
//       const request=await axios.request(options)
//       console.log("Forecast Request=",request.data);
//       setForecast(request.data)
//       // return request
//   }
//   fetchData();
// },[])

// useEffect(()=>{
//   console.log("useEffect called");
//   async function fetchData(){
//       const options = {
//               method: 'GET',
//               url: 'https://air-quality.p.rapidapi.com/current/airquality',
//               params:{lon: '-73.00597', lat: '40.71427'},
//               headers: {
//                   'x-rapidapi-host': 'air-quality.p.rapidapi.com',
//                   'x-rapidapi-key': '92892ab54amshf55ba9722bf8547p1eedb8jsn24eaeb644984'
//               }
//           };
//       const request=await axios.request(options)
//       console.log("AirQuality Request=",request.data);
//       setAirquality(request.data)
//       // return request
//   }
//   fetchData();
// },[])

// useEffect(()=>{
//   console.log("useEffect called");
//   async function fetchData(){
//       const options = {
//               method: 'GET',
//               url: 'https://meteostat.p.rapidapi.com/stations/nearby',
//               params: {lat: '51.5085', lon: '-0.1257'},
//               headers: {
//                   'x-rapidapi-host': 'meteostat.p.rapidapi.com',
//                   'x-rapidapi-key': '92892ab54amshf55ba9722bf8547p1eedb8jsn24eaeb644984'
//               }
//           };
//       const request=await axios.request(options)
//       console.log("Station Request=",request.data);
//       setStation(request.data)
//       // return request
//   }
//   fetchData();
// },[])

  return (
    <Router>
      <div className="App">
          <Header/>
          
            <Switch> 
              <Route exact path='/currentWeather' component={() => (<CurrentWeather weather={weather} />)}></Route>
              <Route exact path='/forecast' component={() => (<Forecast forecast={forecast} />)}></Route>
              {/* <Route exact path='/cityWeather' component={CityWeather}></Route>*/}
              <Route exact path='/weatherStation' component={() => (<WeatherStation station={station} />)}></Route>
              {/* <Route exact path='/tidalLength' component={TidalLength}></Route> */}
              <Route exact path='/airQuality' component={() => (<AirQuality airquality={airquality} />)}></Route> 
            </Switch> 
      </div>
    </Router>
  );
}

export default App;