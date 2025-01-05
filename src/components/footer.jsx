import React from 'react';
import resumepdf from '../assests/resume/praveshResumeLatest.pdf';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import { 
  LinkedIn, 
  GitHub, 
  Description, 
  EmailOutlined, 
  PhoneOutlined, 
  LocationOnOutlined 
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Configuration objects for better maintainability
  const contactInfo = [
    { 
      icon: <EmailOutlined />, 
      text: 'praveshsingh439@gmail.com',
      href: 'mailto:praveshsingh439@gmail.com'
    },
    { 
      icon: <PhoneOutlined />, 
      text: '+91-7827715657',
      href: 'tel:+917827715657'
    },
    { 
      icon: <LocationOnOutlined />, 
      text: 'New Delhi, India',
      href: 'https://maps.google.com/?q=New+Delhi,India'
    }
  ];

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { 
      icon: <LinkedIn />, 
      href: "https://www.linkedin.com/in/pravesh-s-1783bb122/", 
      name: "LinkedIn",
      ariaLabel: "Visit Pravesh's LinkedIn profile"
    },
    { 
      icon: <GitHub />, 
      href: "https://github.com/Pravesh981", 
      name: "GitHub",
      ariaLabel: "Visit Pravesh's GitHub profile"
    },
    { 
      icon: <Description />, 
      href: resumepdf, 
      name: "Resume",
      ariaLabel: "Download Pravesh's Resume"
    }
  ];

  const FooterSection = ({ title, children }) => (
    <Grid item xs={12} sm={4}>
      <Typography 
        variant="h6" 
        gutterBottom
        sx={{ 
          fontWeight: 600,
          mb: 2
        }}
      >
        {title}
      </Typography>
      {children}
    </Grid>
  );

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#3498DB', 
        color: 'white', 
        py: { xs: 4, md: 6 },
        position: 'relative',
        width: '100%'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Information */}
          <FooterSection title="Contact Me">
            {contactInfo.map(({ icon, text, href }) => (
              <Link
                key={text}
                href={href}
                color="inherit"
                underline="hover"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 1.5,
                  '&:hover': { color: 'var(--secondary-color)' }
                }}
              >
                <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                  {icon}
                </Box>
                <Typography variant="body2" color="inherit">
                  {text}
                </Typography>
              </Link>
            ))}
          </FooterSection>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            {pages.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                color="inherit"
                underline="hover"
                sx={{
                  display: 'block',
                  mb: 1.5,
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    color: 'var(--secondary-color)', 
                    ml: 1,
                    transform: 'translateX(4px)'
                  }
                }}
              >
                {name}
              </Link>
            ))}
          </FooterSection>

          {/* Social Media */}
          <FooterSection title="Connect">
            <Box sx={{ 
              display: 'flex', 
              justifyContent: isMobile ? 'center' : 'flex-start',
              gap: 2
            }}>
              {socialLinks.map(({ icon, href, name, ariaLabel }) => (
                <IconButton
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  color="inherit"
                  sx={{
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'scale(1.2) rotate(5deg)', 
                      color: 'var(--secondary-color)' 
                    }
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </FooterSection>

          {/* Copyright */}
          <Grid item xs={12}>
            <Typography 
              variant="body2" 
              align="center"
              sx={{ 
                opacity: 0.9,
                borderTop: '1px solid rgba(255,255,255,0.2)',
                pt: 2,
                mt: 2
              }}
            >
              © {new Date().getFullYear()} Pravesh Singh. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;