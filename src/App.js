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
// import CityWeather from './components/CityWeather/CityWeather';
import AirQuality from './components/AirQuality/AirQuality';
import WeatherStation from './components/WeatherStation/WeatherStation';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [weather,setWeather]=useState([])
  const [forecast, setForecast] = useState([])
  // const [cityWeather, setCityWeather] = useState([])
  const [airquality,setAirquality]=useState([])
  const [station,setStation]=useState([])

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const [token, setToken] = useState(1);
  const [status, setStatus] = useState(null);


  useEffect(()=>{
    console.log("useEffect");
    async function getLocation() {
      if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
      } else {
        setStatus('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        }, () => {
          setStatus('Unable to retrieve your location');
        });
      }
    }

    console.log(lat,lng);

    getLocation()
},[])

  // useEffect(()=>{
  //   async function getCoords(){
  //     const pos = await new Promise((resolve, reject) => {
  //       navigator.geolocation.getCurrentPosition(resolve, reject);
  //     });
  
  //     return {
  //       long: pos.coords.longitude,
  //       lat: pos.coords.latitude,
  //     };
  //   }

  //   const coords =getCoords().then((res)=>{
  //     console.log("Response=",res);
  //     setLat(res.lat);
  //     setLng(res.long);
  //     return res
  //   });
  //   const a=Array(coords)
  //   console.log("Coords=",coords);
  //   console.log("type=",typeof coords);
  //   console.log("a=",a);
  //   // setLat(coords.lat);
  //   // setLng(coords.long);
  // },[])

  // console.log("Latitude=",lat);
  // console.log("Longitude=",lng);


  useEffect(()=>{
    console.log("useEffect called");
    async function fetchData(){
        const options = {
                method: 'GET',
                url: 'https://community-open-weather-map.p.rapidapi.com/weather',
                params: {
                    // q: 'London,uk',
                    lat: lat,
                    lon: lng,
                    // callback: 'test',
                    id: '2172797',
                    lang: 'null',
                    units: 'imperial',
                    mode: 'json'
                },
                headers: {
                    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                    'x-rapidapi-key': '92892ab54amshf55ba9722bf8547p1eedb8jsn24eaeb644984'
                }
            };
        const request=await axios.request(options)
        console.log("Weather Request=",request.data);
        setWeather(request.data)
        // return request
    }
    if(lat)
    fetchData();
},[lat])

useEffect(()=>{
  console.log(lat,lng,"************1");
  async function fetchData(){
      const options = {
              method: 'GET',
              url: 'https://forecast9.p.rapidapi.com/rapidapi/forecast/London/summary/',
              headers: {
                  'x-rapidapi-host': 'forecast9.p.rapidapi.com',
                  'x-rapidapi-key': '92892ab54amshf55ba9722bf8547p1eedb8jsn24eaeb644984'
              }
          };
      const request=await axios.request(options)
      console.log("Forecast Request=",request.data);
      setForecast(request.data)
      // return request
  }
  if(lat)
  fetchData();
},[lat])

useEffect(()=>{
  console.log(lat,lng,"******2");
  async function fetchData(){
      const options = {
              method: 'GET',
              url: 'https://air-quality.p.rapidapi.com/current/airquality',
              params:{lat: lat, lon: lng, hours: '72'},
              headers: {
                  'x-rapidapi-host': 'air-quality.p.rapidapi.com',
                  'x-rapidapi-key': '92892ab54amshf55ba9722bf8547p1eedb8jsn24eaeb644984'
              }
          };
      const request=await axios.request(options)
      console.log("AirQuality Request=",request.data);
      setAirquality(request.data)
      // return request
  }
  if(lat)
  fetchData();
},[lat])

useEffect(()=>{
  console.log("useEffect called");
  async function fetchData(){
      const options = {
              method: 'GET',
              url: 'https://meteostat.p.rapidapi.com/stations/nearby',
              params: {lat: lat, lon: lng},
              headers: {
                  'x-rapidapi-host': 'meteostat.p.rapidapi.com',
                  'x-rapidapi-key': '92892ab54amshf55ba9722bf8547p1eedb8jsn24eaeb644984'
              }
          };
      const request=await axios.request(options)
      console.log("Station Request=",request.data);
      setStation(request.data)
      // return request
  }
  if(lat)
  fetchData();
},[lat])

  // if(!token) {
  //   return <Login/>
  // }

  return (
    <Router>
      <div className="App">
          <Header/>
          
            <Switch> 
              <Route exact path='/login' component={() => (<Login addtoken={setToken}/>)}></Route>
              <Route exact path='/register' component={() => (<Register/>)}></Route>
              <Route exact path='/currentWeather' component={() => (<CurrentWeather weather={weather} />)}></Route>
              <Route exact path='/forecast' component={() => (<Forecast forecast={forecast} />)}></Route>
              {/* <Route exact path='/cityWeather' component={() => (<CityWeather cityWeather={cityWeather} />)}></Route> */}
              <Route exact path='/weatherStation' component={() => (<WeatherStation station={station} />)}></Route>
              <Route exact path='/airQuality' component={() => (<AirQuality airquality={airquality} />)}></Route> 
            </Switch> 
            <ToastContainer />
      </div>
    </Router>
  );
}

export default App;