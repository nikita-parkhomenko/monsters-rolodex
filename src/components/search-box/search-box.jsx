import React from 'react';

import './search-box.css';

export const SearchBox = ({ placeholder, handleChanges }) => (
    <input className="search-box"
    type="search" 
    placeholder={placeholder}
    onChange={handleChanges} />

)