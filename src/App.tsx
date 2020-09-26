import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import Navigation from './components/Navigation';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
      <Navigation />
    </BrowserRouter>
  );
};

export default App;
