import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({ title, description, imageUrl, altText, buttonText }) {
  return (
    <Card
      sx={{
        maxWidth: 320,
        borderRadius: '16px',
        transition: 'transform 0.4s, box-shadow 0.4s',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 12px 24px rgba(0, 123, 255, 0.4)',
        },
      }}
    >
      <CardMedia
        component="img"
        alt={altText}
        height="160"
        image={imageUrl}
        sx={{
          objectFit: 'cover',
          filter: 'brightness(0.9)',
        }}
      />
      <CardContent sx={{ backgroundColor: '#f9f9f9', padding: '16px' }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 'bold', color: '#003366' }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.5 }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', padding: '0 16px 16px' }}>
        <Button
          size="medium"
          variant="contained"
          sx={{
            backgroundColor: '#007bff',
            color: '#fff',
            textTransform: 'none',
            boxShadow: '0 4px 8px rgba(0, 0, 255, 0.2)',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}
