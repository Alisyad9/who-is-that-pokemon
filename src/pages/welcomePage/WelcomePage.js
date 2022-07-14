import { Flex } from '@chakra-ui/react';
import React from 'react';
import ApiCall from '../../components/ApiCall';

const WelcomePage = () => {
  return (
    <Flex direction="row" justifyContent="center">
      <ApiCall />
    </Flex>
  );
};

export default WelcomePage;
