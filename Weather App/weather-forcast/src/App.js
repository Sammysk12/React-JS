
import { useEffect } from 'react';
import './App.css';
import Button from './Components/Button';
import Card from './Components/Card';
import Input from './Components/Input';
import { useWeather } from './Context/WeatherContext';

function App() {

  const weather = useWeather();

  useEffect(() => {
    //Get Current Location here
    weather.fetchCurrentLocationData();

  },[]);

  return (
    <div className="App">
      <h1>Weather Forcast</h1>
      <div className='flex-board'>

      <Input/>
      <Button onClick={weather.fetchData} value="Search"/>
      </div>
      <Card/>
      <Button value= "Refresh"/>

    </div>
  );
}

export default App;
