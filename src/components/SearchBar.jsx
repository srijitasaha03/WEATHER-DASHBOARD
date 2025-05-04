import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [location, setLocation] = useState('');

    const handleInputChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSearch = () => {
        if (location) {
            onSearch(location);
            setLocation('');
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={location}
                onChange={handleInputChange}
                placeholder="Enter location"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;