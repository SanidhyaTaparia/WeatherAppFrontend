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
import axios from "axios";


function App() {
  const [weather,setWeather]=useState([])
  const [forecast,setForecast]=useState([])

  useEffect(()=>{
    console.log("useEffect called");
    async function fetchData(){
        const options = {
                method: 'GET',
                url: 'https://community-open-weather-map.p.rapidapi.com/weather',
                params: {
                    q: 'London,uk',
                    lat: '0',
                    lon: '0',
                    // callback: 'test',
                    id: '2172797',
                    lang: 'null',
                    units: 'imperial',
                    mode: 'json'
                },
                headers: {
                    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                    'x-rapidapi-key': '47cd745e3amshab32e2942dd9b87p1e6fa4jsn14c37e1f98f1'
                }
            };
        const request=await axios.request(options)
        console.log("Weather Request=",request.data);
        setWeather(request.data)
        // return request
    }
    fetchData();
},[])

useEffect(()=>{
  console.log("useEffect called");
  async function fetchData(){
      const options = {
              method: 'GET',
              url: 'https://forecast9.p.rapidapi.com/rapidapi/forecast/Berlin/summary/',
              headers: {
                  'x-rapidapi-host': 'forecast9.p.rapidapi.com',
                  'x-rapidapi-key': '47cd745e3amshab32e2942dd9b87p1e6fa4jsn14c37e1f98f1'
              }
          };
      const request=await axios.request(options)
      console.log("Forecast Request=",request.data);
      setForecast(request.data)
      // return request
  }
  fetchData();
},[])

  return (
    <Router>
      <div className="App">
          <Header/>
          <h1>This is header</h1>
            <Switch> 
              <Route exact path='/currentWeather' component={() => (<CurrentWeather weather={weather} />)}></Route>
              <Route exact path='/forecast' component={() => (<Forecast forecast={forecast} />)}></Route>
              {/* <Route exact path='/cityWeather' component={CityWeather}></Route>
              <Route exact path='/weatherStation' component={WeatherStation}></Route>
              <Route exact path='/tidalLength' component={TidalLength}></Route>
              <Route exact path='/airQuality' component={AirQuality}></Route> */}
            </Switch> 
      </div>
    </Router>
  );
}

export default App;
