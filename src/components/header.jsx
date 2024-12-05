import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assests/images/boy.avif';

const pages = ['Experience', 'Projects', 'About', 'Contact'];

function Header() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleNavigation = (page) => {
    navigate(`/${page.toLowerCase()}`);
    setMobileOpen(false); // Close drawer after navigation
  };

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'var(--purple2)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img src={logo} alt="Logo" className="headerLogo" />
            </Link>

            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: 'var(--primary-font)',
                fontWeight: 500,
                letterSpacing: '.3rem',
                color: 'inherit',
                ml: 1,
              }}
            >
              Software Tech Boy
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleNavigation(page)}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    ml: 2,
                    fontFamily: 'var(--primary-font)',
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton color="inherit" aria-label="open drawer" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'var(--purple2)',
            color: 'white',
            width: 250,
            animation: 'slideIn 0.3s ease',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <Typography variant="h6" sx={{ fontFamily: 'var(--primary-font)' }}>
            Menu
          </Typography>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {pages.map((page) => (
            <ListItem button key={page} onClick={() => handleNavigation(page)}>
              <ListItemText
                primary={page}
                sx={{
                  '& .MuiTypography-root': {
                    fontFamily: 'var(--primary-font)',
                    fontSize: '1rem',
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
