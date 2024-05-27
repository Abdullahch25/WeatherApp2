import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState('');

    return (
        <div className="search">
            <input type="text" name="City" id="city" placeholder="Enter name of the City" value={input} onChange={(e)=>{setInput(e.target.value)}} />
            <button className="search-button" onClick={()=>{onSearch(input)}}>
                <img src="images/search.png"/>
            </button>
        </div>
    );
};

export default SearchBar;
