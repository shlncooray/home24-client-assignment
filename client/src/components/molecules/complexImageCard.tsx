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
import styles from './styles';

function ComplexImageCard({
  image,
  mainLabel,
  secondaryLabel,
  priceLabel,
  rating,
  mainActionLabel,
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
  mainActionLabel: String;
  onClick?: () => void;
  mainAction: () => void;
}) {
  return (
    <Card key={mainLabel} sx={styles.complexImageCard}>
      <CardActionArea
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (onClick !== undefined) {
            onClick();
          }
        }}
        sx={{ cursor: 'pointer' }}
      >
        <CardMedia
          component="img"
          height="200px"
          sx={styles.complexImageCardMedia}
          image={image}
          title={mainLabel}
        />
        {/* #TODO - Implement Like button functionality */}
        <IconButton
          sx={styles.complexImageCardIcon}
          color="primary"
          aria-label="like"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <Favorite />
        </IconButton>
        <CardContent sx={styles.complexImageCardContent}>
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
            data-testId={mainLabel}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              mainAction();
            }}
          >
            <AddShoppingCart />
            <Typography variant="body2">{mainActionLabel}</Typography>
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ComplexImageCard;
