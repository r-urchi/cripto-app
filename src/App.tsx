import React from 'react';
import './components/css/main.css';
import MainCoins from './components/MainCoins';
import Context from './context/Context';

const App = (): JSX.Element => {

  return (
    <div className="App">
      <Context>
        <MainCoins/>
      </Context>
    </div>
  );
}

export default App;
