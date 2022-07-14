import axios from 'axios';

import { Link } from 'react-router-dom';
import './App.css';
import WelcomePage from './pages/welcomePage/WelcomePage';
import { Text } from '@chakra-ui/react';

function App() {
  return (
    <Text textAlign="center" fontSize="50px" color="tomato">
      I'm using a custom font-size value for this text
    </Text>
  );
}

export default App;
