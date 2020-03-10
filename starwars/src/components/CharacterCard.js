import React from 'react';
// import styled from 'styled-components';

const CharacterCard = props => {
    console.log("card info", props);
    
    return (
        <div className="characterInfo">
            <h1 className="character_name">{props.name}</h1>
                <p className="height">Height: {props.height}</p>
                <p className="mass">Mass: {props.mass}</p>
                <p className="hair_color">Hair color:{props.hair}</p>
                <p className="birth_year">Birth year: {props.birth_year}</p>
        </div>
    );
};

export default CharacterCard;

