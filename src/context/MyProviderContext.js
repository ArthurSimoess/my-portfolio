/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProviderContext({ children }) {
  const [theme, setTheme] = useState('light');

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <div>
      <MyContext.Provider value={contextValue}>
        { children }
      </MyContext.Provider>
    </div>
  );
}

MyProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProviderContext;
