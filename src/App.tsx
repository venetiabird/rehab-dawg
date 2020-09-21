import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <p>
    //       Billie Dawg's Rehab Progress
    //     </p>  
    //   </header>
    // </div>
  );
};

export default App;
