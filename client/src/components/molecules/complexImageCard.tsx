import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { Favorite, AddShoppingCart } from '@mui/icons-material';
import { Ratings } from 'components/atoms';

function ComplexImageCard({
  image,
  mainLabel,
  secondaryLabel,
  priceLabel,
  rating,
  onClick,
  mainAction,
}: {
  image: string;
  mainLabel: string;
  secondaryLabel?: string;
  priceLabel?: string;
  rating?: {
    average: number;
    count: number;
  };
  onClick?: () => void;
  mainAction: () => void;
}) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        mr: 2,
      }}
    >
      <CardActionArea onClick={onClick} sx={{ cursor: 'pointer' }}>
        <CardMedia
          component="img"
          height="200px"
          sx={{ width: '100%', flex: '1 0 auto', objectFit: 'scale-down' }}
          image={image}
          title={mainLabel}
          onClick={() => {}}
        />
        <IconButton
          sx={{ position: 'absolute', top: 1, right: 1 }}
          color="primary"
          aria-label="like"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <Favorite />
        </IconButton>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography gutterBottom variant="subtitle1" component="div">
            {priceLabel}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {mainLabel}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div">
            {secondaryLabel}
          </Typography>
          <Ratings count={rating ? rating.count : 0} rate={rating ? rating.average : 0} />
          <Button
            sx={{ mt: 1 }}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              mainAction();
            }}
          >
            <AddShoppingCart />
            <Typography variant="body2">Add to Cart</Typography>
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ComplexImageCard;
