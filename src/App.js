import { WEATHER_API_KEY, WEATHER_API_URL } from './api/api';
import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import Search from './components/search/search';

function App() {
  const searchPasserHandler = async (searchData) => {
    try {
      const [lat, lon] = searchData.value.split(" ")
      const currentWeatherFetch = await fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
      const forecastWeatherFetch = await fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)

      console.log(currentWeatherFetch, forecastWeatherFetch)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container">
      <Search searchPasser={searchPasserHandler} />
      <CurrentWeather />
    </div>
  );
}

export default App;
