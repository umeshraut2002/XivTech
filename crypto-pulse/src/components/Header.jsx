import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Avatar,
  Button,
  Stack,
  InputBase,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#14161a' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Logo / Title */}
          <Typography
            variant="h5"
            onClick={() => navigate("/")}
            sx={{
              flexGrow: 1,
              color: 'orange',
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Crypto Pulse
          </Typography>

          {/* Nav Links */}
          <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' }, mr: 3 }}>
            <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
            <Button color="inherit" onClick={() => navigate('/markets')}>Markets</Button>
            <Button color="inherit" onClick={() => navigate('/portfolio')}>Portfolio</Button>
          </Stack>

          {/* Search Bar */}
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 200,
              mr: 2,
              backgroundColor: '#1e1e1e',
              color: 'white',
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, color: 'white' }}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search crypto' }}
            />
            <IconButton type="submit" sx={{ p: '10px', color: 'white' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          {/* Theme Toggle */}
          <IconButton color="inherit" sx={{ mr: 2 }}>
            <Brightness4Icon />
          </IconButton>

          {/* User Avatar */}
          <IconButton onClick={() => navigate('/profile')}>
            <Avatar alt="User Avatar" sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
