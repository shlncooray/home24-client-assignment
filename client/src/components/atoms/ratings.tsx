import { Box, Rating, Typography } from '@mui/material';
import styles from './styles';

function Ratings({ count, rate, onClick }: { count: number; rate: number; onClick?: () => void }) {
  return (
    <Box sx={styles.ratingBox}>
      <Rating data-testid={`rating-comp-${count}-${rate}`} value={rate} onClick={onClick} />
      <Typography
        data-testid={`rating-text-${count}-${rate}`}
        gutterBottom
        variant="subtitle2"
        component="div"
      >
        {`(${count})`}
      </Typography>
    </Box>
  );
}

export default Ratings;
