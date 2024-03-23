
import './App.css';
import React from 'react';

import Header from './Components/Header';
import Home from './Components/Home';

import { DataProvider } from './ContextApi/Context';
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Home />
       
      </DataProvider>

    </div>
  );
}

export default App;