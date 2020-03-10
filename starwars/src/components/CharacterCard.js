import React from 'react';
import styled from 'styled-components';

const CharacterCard = props => {
    console.log("card info", props);
    
    const CardWrapper = styled.div`
        padding: .7em;
        margin: 20px;
        height: 85%;
        width: 85%;
        border-radius: 37px;
        background: #fff4e8;
        box-shadow:  6px 6px 8px #e8ded3, 
                    -6px -6px 8px #fffffd;
    `;
    
    const ParaColor = styled.div`
        background-color: #fff4e8;
        border-radius: 20%:
        border-top: 3px solid black;
    `;

    const Pblack = styled.p`
        color: #25160C;
        font-size: 1em;
        text-align: center;
    `;
    const Pbrown = styled.p`
        color: #49392E;
        font-size: 1em;
        text-align: center;
    `;
    const Pgray = styled.p`
        color: #767367;
        font-size: 1em;
        text-align: center;
    `;
    const Pyellow = styled.p`
        color: #918B79;
        font-size: 1em;
        text-align: center;
    `;

    return (
        <div className="characterInfo">
            <CardWrapper>
                <h1 className="character_name">{props.name}</h1>
                <ParaColor className="paragraph_color">
                    <Pblack className="height">Height: {props.height}</Pblack>

                    <Pbrown className="mass">Mass: {props.mass}</Pbrown>

                    <Pgray className="hair_color">Hair color: {props.hair}</Pgray>

                    <Pyellow className="birth_year">Birth year: {props.birth}</Pyellow>
                </ParaColor>
            </CardWrapper>
        </div>
    );
};

export default CharacterCard;

