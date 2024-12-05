import React from 'react';
import resumepdf from '../assests/resume/praveshResumeLatest.pdf';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton 
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
  const pages = ['Home', 'Projects', 'Experience', 'Contact'];
  const socialLinks = [
    { 
      icon: <LinkedIn />, 
      href: "https://www.linkedin.com/in/pravesh-s-1783bb122/", 
      name: "LinkedIn" 
    },
    { 
      icon: <GitHub />, 
      href: "https://github.com/Pravesh981", 
      name: "GitHub" 
    },
    { 
      icon: <Description />, 
      href: resumepdf, 
      name: "Resume" 
    }
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: 'var(--purple2)', 
        color: 'white', 
        py: 6,
        // mt: 4
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
         
          {/* Contact Information */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom >
              Contact Me
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1}}>
              <EmailOutlined sx={{ mr: 1 }} />
              <Typography variant="body2" color='white'>
                praveshsingh439@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneOutlined sx={{ mr: 1 }} />
              <Typography variant="body2" color='white'>
                +91-7827715657
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnOutlined sx={{ mr: 1 }} />
              <Typography variant="body2" color='white'>
                New Delhi, India
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            {pages.map((page) => (
              <Link
                key={page}
                href={`/${page.toLowerCase()}`}
                color="inherit"
                underline="hover"
                sx={{
                  display: 'block',
                  mb: 1,
                  transition: 'color 0.3s ease',
                  '&:hover': { 
                    color: 'var(--secondary-color)', 
                    ml: 1 
                  }
                }}
              >
                {page}
              </Link>
            ))}
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Connect
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  color="inherit"
                  sx={{
                    mr: 1,
                    transition: 'transform 0.3s ease',
                    '&:hover': { 
                      transform: 'scale(1.2)', 
                      color: 'var(--secondary-color)' 
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Copyright */}
          <Grid item xs={12} textAlign="center" mt={2}>
            <Typography 
              variant="body2" 
              sx={{ 
                opacity: 0.7,
                borderTop: '1px solid rgba(255,255,255,0.2)',
                pt: 2
              }}
              color='white'
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