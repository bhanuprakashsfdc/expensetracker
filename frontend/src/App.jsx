{/*https://www.youtube.com/watch?v=i0JesTevAcA */}

import React, { useState, useMemo } from 'react';
import './App.css'
import Dashboard from './components/Dashboard/Dashboard';
import Income from './components/Income/Income';
import Expenses from './components/Expenses/Expenses';
import Home from './layout/Homelayout/Homelayout'
function App() {
  const displayData = () => {
    switch(active) {
      case 1:
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4: 
        return <Expenses />;
      default: 
        return <Dashboard />;
    }
  };

  return (
    <div className='apphome'>
      <Home />
    </div>
  )
}
export default App
