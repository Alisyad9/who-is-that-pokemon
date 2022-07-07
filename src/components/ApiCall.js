import axios from 'axios';
import React, { useState } from 'react';

// const ApiCall = () => {
//   return (
//     <div>ApiCall</div>
//   )
// }

const ApiCall = () => {
  const [pokemonImage, setPokemonImage] = useState('');

  const randomNumber = Math.floor(Math.random() * 120 + 1);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await axios({
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`,
      }).then((res) => {
        console.log(res.data.sprites.front_default);
        setPokemonImage(res.data.sprites.front_default);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <button>click me</button>
      </form>
      <div>
        <img src={pokemonImage}></img>
      </div>
    </div>
  );
};

export default ApiCall;
