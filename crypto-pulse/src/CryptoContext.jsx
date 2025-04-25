import React, { createContext, useContext, useState } from 'react';

// 1. Create context
const Crypto = createContext();

// 2. Provider component
const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState('INR');
  const [symbol, setSymbol] = useState('₹');

  // 3. Keep symbol in sync with currency
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

// 4. Export useContext hook
export const CryptoState = () => {
  return useContext(Crypto);
};

export default CryptoContext;