import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (location) => {
    try {
        const response = await axios.get(`${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};