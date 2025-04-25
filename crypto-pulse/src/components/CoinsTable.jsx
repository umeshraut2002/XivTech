import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CoinList } from '../config/Config';
import { CryptoState } from '../CryptoContext';
import { Container, Typography, createTheme, ThemeProvider, TextField } from '@mui/material';

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState()

  const { currency } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(CoinList(currency));
      setCoins(data);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  // Create Dark Theme (MUI)
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  });

  return (
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat" }}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>

        <TextField label="Search For Crypto Currency Here" variant='outlined' 
        style={{marginBottom: 20, width: '100%'}}
        onChange={(e) => setSearch(e.target.value)}
        />

        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {coins.map((coin) => (
              <li key={coin.id}>
                {coin.name} ({coin.symbol.toUpperCase()}): ${coin.current_price}
              </li>
            ))}
          </ul>
        )}
      </Container>
  );
};

export default CoinsTable;
