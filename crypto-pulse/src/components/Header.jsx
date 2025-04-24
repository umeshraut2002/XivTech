import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#14161a' }}>
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            style={{
              flex: 1,
              color: 'orange',
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Crypto Tracker
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
