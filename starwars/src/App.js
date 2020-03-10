import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';

import styled from 'styled-components';
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




  const ContainerBox = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      width: 100%;
      border-radius: 37px;
      background-color: #fff4e8;
      box-shadow:  6px 6px 8px #e8ded3, 
                    -6px -6px 8px #e8ded3;
  `;

  const Header = styled.h1`
        display: flex;
        justify-content: center;
        width: 100%
  `;


  return (
    <div className="App">
      <Header className="Header">React Wars</Header>
      <ContainerBox className="container">
        {data.map(user => {
        return <CharacterCard name={user.name} height={user.height} mass={user.mass} hair={user.hair_color} birth={user.birth_year} key={user.name}/>
          })}          
      </ContainerBox>
    </div>
  );
}

export default App;

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.