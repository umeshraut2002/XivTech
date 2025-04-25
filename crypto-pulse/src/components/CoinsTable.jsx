import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CoinList } from '../config/Config';
import { CryptoState } from '../CryptoContext';
import {
  Container,
  Typography,
  createTheme,
  ThemeProvider,
  TextField,
  TableContainer,
  LinearProgress,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Table,
  Paper,
} from '@mui/material';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const { currency, symbol: originalSymbol } = CryptoState();
  const symbol = '$';

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

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: 'center' }}>
        <Typography variant="h4" style={{ margin: 18, fontFamily: 'Montserrat' }}>
          Cryptocurrency Prices by Market Cap
        </Typography>

        <TextField
          label="Search For Crypto Currency"
          variant="outlined"
          style={{ marginBottom: 20, width: '100%' }}
          onChange={(e) => setSearch(e.target.value)}
        />

        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress style={{ backgroundColor: 'orange' }} />
          ) : (
            <Table>
              <TableHead style={{ backgroundColor: 'orange' }}>
                <TableRow>
                  <TableCell style={{ color: 'black', fontWeight: 'bold' }}>Coin</TableCell>
                  <TableCell style={{ color: 'black', fontWeight: 'bold' }} align="right">Price</TableCell>
                  <TableCell style={{ color: 'black', fontWeight: 'bold' }} align="right">1h%</TableCell>
                  <TableCell style={{ color: 'black', fontWeight: 'bold' }} align="right">24h%</TableCell>
                  <TableCell style={{ color: 'black', fontWeight: 'bold' }} align="right">7d%</TableCell>
                  <TableCell style={{ color: 'black', fontWeight: 'bold' }} align="right">Market Cap</TableCell>
                  <TableCell style={{ color: 'black', fontWeight: 'bold' }} align="right">Volume (24h)</TableCell>
                  <TableCell style={{ color: 'black', fontWeight: 'bold' }} align="right">Circulating Supply</TableCell>
                  <TableCell style={{ color: 'black', fontWeight: 'bold' }} align="right">Last 7 Days</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {handleSearch().map((row) => {
                  const profit1h = row.price_change_percentage_1h_in_currency > 0;
                  const profit24h = row.price_change_percentage_24h > 0;
                  const profit7d = row.price_change_percentage_7d_in_currency > 0;

                  return (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <img src={row.image} alt={row.name} height="30" />
                          <div>
                            <span style={{ textTransform: 'uppercase', fontSize: 18 }}>{row.symbol}</span>
                            <br />
                            <span style={{ color: 'gray' }}>{row.name}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        {symbol} {row.current_price.toLocaleString()}
                      </TableCell>
                      <TableCell align="right" style={{ color: profit1h ? 'limegreen' : 'red' }}>
                        {profit1h && '+'}
                        {row.price_change_percentage_1h_in_currency?.toFixed(2)}%
                      </TableCell>
                      <TableCell align="right" style={{ color: profit24h ? 'limegreen' : 'red' }}>
                        {profit24h && '+'}
                        {row.price_change_percentage_24h?.toFixed(2)}%
                      </TableCell>
                      <TableCell align="right" style={{ color: profit7d ? 'limegreen' : 'red' }}>
                        {profit7d && '+'}
                        {row.price_change_percentage_7d_in_currency?.toFixed(2)}%
                      </TableCell>
                      <TableCell align="right">
                        {symbol} {row.market_cap?.toLocaleString().slice(0, -6)}M
                      </TableCell>
                      <TableCell align="right">
                        {symbol} {row.total_volume?.toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        {symbol} {row.circulating_supply?.toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        {row?.sparkline_in_7d?.price?.length ? (
                          <Sparklines data={row.sparkline_in_7d.price}>
                            <SparklinesLine color={profit7d ? "limegreen" : "red"} />
                          </Sparklines>
                        ) : (
                          'N/A'
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;
