import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, IndexRoute } from 'react-router';
import { Link } from 'react-router-dom';

const ApiCall = () => {
  const [pokemonImage, setPokemonImage] = useState('');
  const [fakeName1, setFakename1] = useState('');
  const [fakeName2, setFakename2] = useState('');
  const [realName, setRealName] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  ////////////////////////////////

  ////////////////////////////////
  let asyncResult;
  (async function () {
    const asyncFunctions = [fakePokemon1, fakePokemon2, onSubmitHandler];
    const results = await Promise.all(asyncFunctions);
    // outputs `[2, 3, 5]` after five seconds
    console.log(results);
    asyncResult = results;
    console.log(asyncResult);
  })();

  // const randomName = Math.floor(Math.random() * array.length);
  // console.log('array result', array);
  // console.log('Random array name', array[randomName);

  const randomNumber1 = Math.floor(Math.random() * (50 - 1) + 1);
  const randomNumber2 = Math.floor(Math.random() * (100 - 51) + 51);
  const randomNumber3 = Math.floor(Math.random() * (150 - 101) + 101);

  const fakePokemon1 = async () => {
    try {
      await axios({
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${randomNumber2}/`,
      }).then((res) => {
        console.log(res.data);
        setFakename1(res.data.name);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const fakePokemon2 = async () => {
    try {
      await axios({
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${randomNumber3}/`,
      }).then((res) => {
        console.log(res.data);
        setFakename2(res.data.name);
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
    fakePokemon1();
    fakePokemon2();
  };

  ////////
  let array = [fakeName1, fakeName2, realName];
  console.log(array);

  let shuffled = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  console.log(shuffled.map((value) => value === realName));

  function arraySwap() {
    return (
      <div>
        {shuffled.map((value) => (
          <ul>
            <li key={value}>
              <button>{value}</button>
            </li>
          </ul>
        ))}
      </div>
    );
  }
  return (
    <div>
      <div className="border">
        <div>
          <img src={pokemonImage}></img>
        </div>
      </div>

      {isClicked
        ? shuffled.map((value) => (
            <ul>
              <li key={value}>
                {value === realName ? (
                  <button onClick={onSubmitHandler}>{value}</button>
                ) : (
                  <Link to="/incorrect">
                    <button>{value}</button>
                  </Link>
                )}
              </li>
            </ul>
          ))
        : ''}

      {isClicked ? (
        <div>
          <Link to="/incorrect">
            <button>{fakeName1}</button>
            <button>{fakeName2}</button>
          </Link>

          <button onClick={onSubmitHandler}>{realName}</button>
          {/* <button onClick={onSubmitHandler}>{arraySwap()}</button> */}
        </div>
      ) : (
        <form onSubmit={onSubmitHandler}>
          <button>New game</button>
        </form>
      )}

      {/* {shuffled.map((value) => (
        <ul>
          <li key={value}>
            <button>{value}</button>
          </li>
        </ul>
      ))} */}
      <div>{arraySwap()}</div>
    </div>
  );
};

export default ApiCall;

// li {
//   border: 10px;
//   color: red;
//   margin: 5px;
// }

// ul.demo {
//   list-style-type: none;
//   border: 2px;
//   margin: 3px;
//   display: flex;
//   flex-direction: row;
// }
