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
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
// import MenuIcon from '../assests/images/icons/burger-menu.png';
import logo from '../assests/images/boy.avif';

const pages = ['Experience', 'Projects', 'About', 'Contact'];

function Header() {
  const navigate = useNavigate(); // Hook for navigation
  const [mobileOpen, setMobileOpen] = React.useState(false); // State for mobile drawer

  const handleNavigation = (page) => {
    if (page === 'Projects') {
      navigate('/projects'); // Navigate to Projects page when clicked
    } else if (page === 'Contact') {
      navigate('/contact');
    } else if (page === 'Experience') {
      navigate('/experience');
    }
    else if (page === 'About') {
      navigate('/about');
    }
    else {
      console.log(`${page} clicked`);
    }
  };

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'var(--purple2)',

        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={
            {
              justifyContent: 'space-between',
            }
          }>
            {/* Logo on the left */}
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img src={logo} alt="" className="headerLogo" />
            </Link>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: {  md: 'flex' },
                // xs: 'none',
                fontFamily: 'var(--primary-font)',
                fontWeight: 500,
                letterSpacing: '.3rem',
                color: 'inherit',
                marginLeft: '10px',
                textDecoration: 'none',
              }}
            >
              Software Tech Boy
            </Typography>

            {/* Right aligned menu items for desktop */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleNavigation(page)} // Handle navigation on click
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

            {/* Burger menu for mobile */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for mobile navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {pages.map((page) => (
              <ListItem button key={page} onClick={() => handleNavigation(page)}>
                <ListItemText primary={page} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
