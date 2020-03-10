import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';

// import styled from 'styled-components';
import './App.css';

  

const App = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
        .then(res => {
          setData(res.data.results);
        })
        .catch( err => {console.log(err)} )
  }, []) 


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="container">
        {data.map(user => {
        return <CharacterCard name={user.name} height={user.height} mass={user.mass} hair={user.hair_color} birth={user.birth_year} />
          })}          
      </div>
    </div>
  );
}

export default App;

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.