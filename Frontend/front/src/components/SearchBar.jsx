import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


import '../sd.css'

function SearchBar({ data }) {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const filteredData = data.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="search-bar-container">
            <div className="search-input">
            
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
            />
            </div>
            <ul>
                {filteredData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;
