import React, { useState } from 'react';
import axios from 'axios';

const Personalize = () => {
  const [userData, setUserData] = useState({});
  const [personalized, setPersonalized] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    axios.post('/api/personalize', userData)
      .then(response => setPersonalized(response.data))
      .catch(error => console.error('Error personalizing weather data:', error));
  };

  return (
    <div>
      <h1>Personalize Your Weather Forecast</h1>
      <input type="text" name="preference" onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
      {personalized && <div>{JSON.stringify(personalized)}</div>}
    </div>
  );
};

export default Personalize;