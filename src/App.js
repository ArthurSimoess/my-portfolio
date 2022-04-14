import React, { useContext } from 'react';
import './App.scss';
import MyContext from './context/MyContext';
import RoutesPages from './routes';

function App() {
  const { theme } = useContext(MyContext);

  return (
    <div id={theme} className={theme}>
      <RoutesPages />
    </div>
  );
}

export default App;
