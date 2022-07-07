import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import NotFound from './pages/Incorrect/NotFound';
import Layout from './pages/layout/Layout';
import WelcomePage from './pages/welcomePage/WelcomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/welcomePage" element={<WelcomePage />} />
      </Route>
      <Route path="incorrect" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

{
  /* <Route path="/" element={<App />}>
<Route path="foo" element={<Foo />} />
<Route path="bar" element={<Bar />} />
<Route path="baz" element={<Baz />} />
<Route path="blah" element={<Blah />} />
</Route> */
}
