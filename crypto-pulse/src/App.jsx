import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // ✅ Add this
import { makeStyles } from '@mui/styles'; // Ensure this package is installed
import './App.css';

import Homepage from './pages/Homepage.jsx';
import Coinpage from './pages/Coinpage.jsx';
import Header from './components/Header.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <div className={classes.root}>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/coins/:id' element={<Coinpage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
