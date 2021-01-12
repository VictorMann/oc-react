import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Template from './components/Estruture/Template';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Routes />
      </Template>
    </BrowserRouter>
  );
}

export default App;
