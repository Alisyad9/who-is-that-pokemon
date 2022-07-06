import axios from 'axios';
import React from 'react';

// const ApiCall = () => {
//   return (
//     <div>ApiCall</div>
//   )
// }

const ApiCall = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    try {
      axios
        .get({
          method: 'get',
          url: 'https://pokeapi.co/api/v2/pokemon/ditto',
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <button>click me</button>
        <div>hey</div>
      </form>
    </div>
  );
};

export default ApiCall;
