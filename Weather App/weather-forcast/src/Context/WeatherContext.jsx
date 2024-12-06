import { createContext, useContext, useState } from "react";
import { getWeatherForCity, getWeatherForLocation } from "../Api/getWeatherApi";

const WeatherContext = createContext(null);


export const useWeather = () =>{
     return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {

    const [data, setData]= useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchData = async () =>{
        const response = await getWeatherForCity(searchCity);
        setData(response);
    }


    const fetchCurrentLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) =>{
            getWeatherForLocation(position.coords.latitude, position.coords.longitude).then((data) => setData(data));
        });
    }

    return <WeatherContext.Provider value = {{searchCity, data, setSearchCity, fetchData, fetchCurrentLocationData}}>
        {props.children}
        </WeatherContext.Provider>
}