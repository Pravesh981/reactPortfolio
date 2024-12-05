import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

export default function devCard({ developer, skills, imageUrl, altText }) {
  return (
    <Card
      sx={{
        maxWidth: {
          xs: '255px',  // For extra-small devices (phones)
          sm: '274px',  // For small devices (tablets)
          md: '320px'   // For medium devices and up (desktop)
        },
        padding: {
          xs: '16px',
          sm: '20px',
          md: '24px'
        },
        borderRadius: '25px',
        backdropFilter: 'blur(15px)',
        background: `radial-gradient(circle at top left, rgba(0, 122, 255, 0.6), transparent 50%),
                    radial-gradient(circle at bottom right, rgba(255, 0, 128, 0.6), transparent 50%),
                    rgba(255, 255, 255, 0.1)`,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        margin: {
          xs: '10px',
          sm: '15px',
          md: '20px'
        }
      }}
    >
      <CardContent sx={{ textAlign: 'center', padding: '0' }}>
        <CardMedia
          component="img"
          alt={altText}
          sx={{
            borderRadius: '25px',
            padding: {
              xs: '6px',
              sm: '8px',
              md: '10px'
            },
            height: {
              xs: '120px',
              sm: '130px',
              md: '140px'
            }
          }}
          image={imageUrl}
        />
        <Typography
          variant="h4"
          sx={{
            color: '#ffffff',
            fontWeight: 'bold',
            marginBottom: '15px',
            fontSize: {
              xs: '1.5rem',
              sm: '1.8rem',
              md: '2rem'
            }
          }}
        >
          {developer}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#ffffff',
            marginBottom: '15px',
            letterSpacing: '1px',
            fontSize: {
              xs: '0.875rem',
              sm: '0.925rem',
              md: '1rem'
            },
            padding: {
              xs: '0 8px',
              sm: '0 10px',
              md: '0 12px'
            }
          }}
        >
          {skills}
        </Typography>
      </CardContent>
    </Card>
  );
}