import React, { createContext, useContext, useState } from 'react';

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState('INR');
  const [symbol, setSymbol] = useState('₹');

  React.useEffect(() => {
    if (currency === 'INR') setSymbol('₹');
    else if (currency === 'USD') setSymbol('$');
    else if (currency === 'EUR') setSymbol('€');
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export const CryptoState = () => {
  return useContext(Crypto);
};

export default CryptoContext;