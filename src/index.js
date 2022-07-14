import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import NotFound from './pages/Incorrect/NotFound';
import Layout from './pages/layout/Layout';
import WelcomePage from './pages/welcomePage/WelcomePage';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/welcomePage" element={<WelcomePage />} />
        </Route>
        <Route path="incorrect" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

{
  /* <Route path="/" element={<App />}>
<Route path="foo" element={<Foo />} />
<Route path="bar" element={<Bar />} />
<Route path="baz" element={<Baz />} />
<Route path="blah" element={<Blah />} />
</Route> */
}
