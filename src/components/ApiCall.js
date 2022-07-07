import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, IndexRoute } from 'react-router';
import { Link } from 'react-router-dom';

const ApiCall = () => {
  const [pokemonImage, setPokemonImage] = useState('');
  const [fakeName, setFakename] = useState('');
  const [realName, setRealName] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const [rightButton, setRightButton] = useState('');

  console.log('isClicked value', isClicked);

  const randomNumber1 = Math.floor(Math.random() * (50 - 1) + 1);
  const randomNumber2 = Math.floor(Math.random() * (100 - 51) + 51);

  const fakePokemon = async () => {
    try {
      await axios({
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${randomNumber2}/`,
      }).then((res) => {
        console.log(res.data);
        setFakename(res.data.name);
      });
    } catch (error) {
      console.log(error);
    }
  };
  ///////////
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await axios({
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${randomNumber1}/`,
      }).then((res) => {
        console.log(res.data);
        setPokemonImage(res.data.sprites.front_default);
        setRealName(res.data.name);
        setIsClicked(true);
      });
    } catch (error) {
      console.log(error);
    }
    fakePokemon();
  };

  ////////

  return (
    <div>
      <div className="border">
        <div>
          <img src={pokemonImage}></img>
        </div>
      </div>

      {isClicked ? (
        <div>
          <Link to="/incorrect">
            <button value={rightButton}>{fakeName}</button>
          </Link>

          <button onClick={onSubmitHandler} value={rightButton}>
            {realName}
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmitHandler}>
          <button>New game</button>
        </form>
      )}

      {rightButton && <div>Well done</div>}
    </div>
  );
};

export default ApiCall;
