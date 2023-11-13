// src/components/Autocomplete.js

import React, { useState } from 'react';
import axios from 'axios';

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleChange = async (value) => {
    setInputValue(value);

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&key=AIzaSyDIixEC8HeZzh0VF0ANfGHpg309kDO-x0A`
      );

      setSuggestions(response.data.predictions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSelect = async (placeId) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=TU_CLAVE_DE_API_AQUI`
      );

      const selectedPlaceData = response.data.result;
      setSelectedPlace(selectedPlaceData);
    } catch (error) {
      console.error('Error fetching place details:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese una dirección"
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.place_id} onClick={() => handleSelect(suggestion.place_id)}>
            {suggestion.description}
          </li>
        ))}
      </ul>

      {selectedPlace && (
        <div>
          <h2>Información del lugar seleccionado:</h2>
          <p>Nombre: {selectedPlace.name}</p>
          <p>Dirección: {selectedPlace.formatted_address}</p>
          {/* Agrega más información según tus necesidades */}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
