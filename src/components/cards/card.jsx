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
        maxWidth: 275,
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.05) rotate(2deg)', // Slight tilt and zoom effect on hover
          boxShadow: '0 8px 16px rgba(0, 123, 255, 0.8)', // Glowing effect on hover
        },
      }}
    >
      <CardMedia
        component="img"
        alt={altText}
        height="140"
        image={imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{buttonText}</Button>
      </CardActions>
    </Card>
  );
}
