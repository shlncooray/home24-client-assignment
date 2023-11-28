import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const styles = {
  siCard: { width: 250, height: 200, mr: 2 },
  siCardMedia: { height: 150, objectFit: 'contain' },
};

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
    <Card sx={styles.siCard}>
      <CardActionArea
        data-testid={`simple-card-id${title}`}
        onClick={onClick}
        sx={{ cursor: 'pointer' }}
      >
        <CardMedia sx={styles.siCardMedia} image={image} title={title} />
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
