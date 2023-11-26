import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

function SimpleImageCard({
  image,
  title,
  onClick,
}: {
  image: string;
  title: string;
  onClick?: () => void;
}) {
  return (
    <Card sx={{ width: 250, height: 200, mr: 2 }}>
      <CardActionArea
        data-testid={`simple-card-id${title}`}
        onClick={onClick}
        sx={{ cursor: 'pointer' }}
      >
        <CardMedia sx={{ height: 150, objectFit: 'contain' }} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="div" textAlign="center">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SimpleImageCard;
