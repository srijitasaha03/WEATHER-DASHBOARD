import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
    if (!weatherData) {
        return <div className="weather-card">No weather data available</div>;
    }

    const { temperature, conditions, location } = weatherData;

    return (
        <div className="weather-card">
            <h2>{location}</h2>
            <p>Temperature: {temperature}°C</p>
            <p>Conditions: {conditions}</p>
        </div>
    );
};

export default WeatherCard;