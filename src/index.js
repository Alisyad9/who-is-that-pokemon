import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import WelcomePage from './pages/welcomePage/WelcomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/welcomePage" element={<WelcomePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
