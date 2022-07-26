import React from 'react';
import unknown from '../../components/unknown.png';
import modern from './modern.png';
import { Flex } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      backgroundImage={modern}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      Wrong pokemon try again
    </Flex>
  );
};

export default NotFound;
