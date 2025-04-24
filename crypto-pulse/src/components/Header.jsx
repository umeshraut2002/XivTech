import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" style={{ backgroundColor: '#14161a' }}>
      <Container>
        <Toolbar>
          <Typography
            variant="h5"
            onClick={() => navigate("/")}
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
