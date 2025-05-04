export const formatTemperature = (tempInKelvin) => {
    return Math.round(tempInKelvin - 273.15); // Convert Kelvin to Celsius
};

export const formatWeatherDescription = (description) => {
    return description.charAt(0).toUpperCase() + description.slice(1); // Capitalize the first letter
};

export const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString(); // Format date to local string
};