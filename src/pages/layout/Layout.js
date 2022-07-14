import { Outlet, Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Text,
  Flex,
  List,
  ListItem,
  useColorMode,
  Switch,
  Button,
  useMediaQuery,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

////////////////////////////display flex design////////////////////////////////////
// const breakpoints = createBreakpoints({
//   sm: '10em',
//   md: '22em',
//   lg: '294em',
//   xl: '80em',
// });

////////////////////////////////////////////////////////////////

const Layout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  ///media query
  const [display, changeDisplay] = useState('none');
  const [isLargerThan900] = useMediaQuery('(min-width: 800px)');

  function clickHandler() {
    console.log('hello world');
    return <div>hey</div>;
  }
  return (
    <>
      <nav>
        <Flex
          justifyContent="space-between"
          margin="1rem"
          align="center"
          mx={2}
        >
          {isLargerThan900 ? (
            <Flex>
              <Link to="/">
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  aria-label="Home"
                  my={2}
                >
                  Home
                </Button>
              </Link>
              <Link to="/WelcomePage">
                <Button variant="ghost" aria-label="Home" my={2}>
                  Play game
                </Button>
              </Link>
            </Flex>
          ) : (
            <Flex>
              <IconButton
                aria-label="Menu"
                size="lg"
                mr={2}
                icon={<HamburgerIcon />}
                onClick={() => {
                  changeDisplay('flex');
                }}
              />
            </Flex>
          )}{' '}
          <Flex
            w="100vw"
            bgColor="black"
            zIndex={20}
            h="100vh"
            pos="fixed"
            top="0"
            left="0"
            justifyContent="center"
            overflowY="auto"
            flexDir="column"
            display={display}
          >
            <Flex>
              {' '}
              <IconButton
                margin="1rem"
                colorScheme="messenger"
                aria-label="Close"
                size="lg"
                position="absolute"
                top="0px"
                right="0px"
                icon={<CloseIcon />}
                onClick={() => {
                  changeDisplay('none');
                }}
              />
            </Flex>

            <Flex flexDirection="column" align="center">
              <Link to="/">
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  aria-label="Home"
                  my={2}
                  onClick={() => {
                    changeDisplay('none');
                  }}
                >
                  Home
                </Button>
              </Link>
              <Link z-index="-1" to="/WelcomePage">
                <Button
                  variant="ghost"
                  colorScheme="messenger"
                  aria-label="Home"
                  my={2}
                  onClick={() => {
                    changeDisplay('none');
                  }}
                >
                  Play game
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Switch onChange={toggleColorMode} />
        </Flex>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
