import React from 'react';
import './App.scss';
import MyProviderContext from './context/MyProviderContext';
import RoutesPages from './routes';

function App() {
  return (
    <div>
      <MyProviderContext>
        <RoutesPages />
      </MyProviderContext>
    </div>
  );
}

export default App;
