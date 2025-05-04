import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Weather Dashboard</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;