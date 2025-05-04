import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import { fetchWeatherData } from '../services/weatherAPI';

const Dashboard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (location) => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchWeatherData(location);
            setWeatherData(data);
        } catch (err) {
            setError('Could not fetch weather data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header />
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {weatherData && <WeatherCard data={weatherData} />}
        </div>
    );
};

export default Dashboard;