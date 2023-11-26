/*
 * File name: ratings.tsx
 * Purpose: MUI Rating component wrap with custom styles and values
 * Created on Sun Nov 24 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

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
