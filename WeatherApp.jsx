import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherDetails from './WeatherDetails';
import './index.css';

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const apikey = '18bcf0f44438d55e2760d1e76c310bcf';

    const handleSearch = (city) => {
        setCity(city);
        if (city.trim()) {
            fetchWeather(city);
        } else {
            alert('Please Enter a City name.');
        }
    };

    const fetchWeather = async (city) => {
        const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
        try {
            const response = await fetch(apiurl);
            if (!response.ok) {
                throw new Error('Weather data not available');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            alert('Error in fetching data: ' + error.message);
        }
    };


    return (
        <div class="container">
            <h1 class="App-name">Weather Forecast</h1>
            <SearchBar onSearch={handleSearch} />
            <WeatherDetails weatherData={weatherData} />
        </div>
    );
};

export default WeatherApp;
