import React from 'react';
import unknown from '../../components/unknown.png';

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

const NotFound = () => {
  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      backgroundImage={unknown}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      Wrong pokemon try again
    </Flex>
  );
};

export default NotFound;
