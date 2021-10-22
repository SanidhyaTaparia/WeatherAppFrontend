import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

function App() {
  return (
    <Router>
      <div className="App">
          <Header/>
            <Switch> 
              <Route exact path='/' component={CurrentWeather}></Route>
              {/* <Route exact path='/forecast' component={Forecast}></Route>
              <Route exact path='/cityWeather' component={CityWeather}></Route>
              <Route exact path='/weatherStation' component={WeatherStation}></Route>
              <Route exact path='/tidalLength' component={TidalLength}></Route>
              <Route exact path='/airQuality' component={AirQuality}></Route> */}
            </Switch> 
      </div>
    </Router>
  );
}

export default App;
