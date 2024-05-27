
import React, { useEffect, useState } from 'react';

const WeatherDetails = ({ weatherData }) => {
    const [weatherInfo, setWeatherInfo] = useState({
        temp: '0°C',
        cityName: 'City',
        humidity: '0%',
        windSpeed: '0 km/h',
        iconSrc: 'images/clear.png' 
    });

    const updateWeatherInfo = (data) => {
        setWeatherInfo({
            temp: `${data.main.temp}°C`,
            cityName: data.name,
            humidity: `${data.main.humidity}%`,
            windSpeed: `${data.wind.speed} km/h`,
            iconSrc: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
        });
    };
    useEffect(() => {
        if (weatherData) {
            updateWeatherInfo(weatherData);
        }
    }, [weatherData]);

    return (
        <div class="weather">
            <img
                src={weatherInfo.iconSrc}
                 class="weather-icon"
            />
            <h1 class="temp">{weatherInfo.temp}</h1>
            <h2 class="city-name">{weatherInfo.cityName}</h2>
            <div class="details">
                <div class="detail1">
                    <img src="images/humidity.png"/>
                    <div>
                        <p class="humidity">{weatherInfo.humidity}</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="detail2">
                    <img src="/images/wind.png"/>
                    <div>
                        <p class="wind">{weatherInfo.windSpeed}</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherDetails;
