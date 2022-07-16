import dog from './dog.jpg';
import unknown from './unknown.png';

import { Button } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Flex,
  Box,
  Image,
  List,
  FormControl,
  Text,
  Fade,
  useDisclosure,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const ApiCall = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [pokemonImage, setPokemonImage] = useState('');
  const [fakeName1, setFakename1] = useState('');
  const [fakeName2, setFakename2] = useState('');
  const [realName, setRealName] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);

  ////////////////////////////////////////////////////////////////

  const property = {
    imageUrl: 'https://unsplash.com/photos/Mv9hjnEUHR4',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };

  ////////////////////////////////////////////////////////////////
  let asyncResult;
  (async function () {
    const asyncFunctions = [fakePokemon1, fakePokemon2, onSubmitHandler];
    const results = await Promise.all(asyncFunctions);
    // outputs `[2, 3, 5]` after five seconds
    console.log(results);
    asyncResult = results;
    console.log(asyncResult);
  })();

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
        setCounter((count) => count + 1);
        if (counter >= 1) {
          setCounter1((old) => old + 1);
        }
      });
    } catch (error) {
      console.log(error);
    }
    fakePokemon1();
    fakePokemon2();
  };

  const incrementHandler = () => {};

  ////////
  let array = [fakeName1, fakeName2, realName];
  console.log(array);

  let shuffled = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  console.log(shuffled.map((value) => value === realName));

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      maxW="md"
    >
      <div>
        {/* <img src={pokemonImage}></img> */}
        <Box maxW="sm" boxShadow="dark-lg" p="1" rounded="md">
          {' '}
          {!isClicked ? <Image src={unknown} /> : <Image src={pokemonImage} />}
        </Box>
      </div>
      <Flex mt="0.8rem" flexDirection="row">
        {isClicked
          ? shuffled.map((value) => (
              <ul>
                <List m="0.8rem" key={value}>
                  {value === realName ? (
                    <Button colorScheme="facebook" onClick={onSubmitHandler}>
                      {value}
                    </Button>
                  ) : (
                    <Link to="/incorrect">
                      <Button colorScheme="whatsapp">{value}</Button>
                    </Link>
                  )}
                </List>
              </ul>
            ))
          : ''}
      </Flex>
      <Flex textAlign="center" mt="0.8rem">
        {!isClicked && (
          <FormControl>
            <button></button>
            <Button mt={4} colorScheme="teal" onClick={onSubmitHandler}>
              New game
            </Button>
          </FormControl>
        )}
      </Flex>
      <Flex textAlign="center" mt="0.8rem">
        {' '}
        <Text>
          Your Score{' '}
          <Text as="mark">
            <Text fontSize="3xl" color="red">
              {' '}
              {counter1}
            </Text>
          </Text>
        </Text>
      </Flex>
    </Flex>
  );
};

export default ApiCall;
