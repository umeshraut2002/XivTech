import React, { createContext, useContext } from 'react';

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  return (
    <Crypto.Provider value={{}}>
      {children}
    </Crypto.Provider>
  );
};

export const CryptoState = () => {
  return useContext(Crypto);
};

export default CryptoContext;
