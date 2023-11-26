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

function Ratings({ count, rate }: { count: number; rate: number }) {
  return (
    <Box sx={styles.ratingBox}>
      <Rating name="no-value" value={rate} onClick={() => {}} />
      <Typography gutterBottom variant="subtitle2" component="div">
        {`(${count})`}
      </Typography>
    </Box>
  );
}

export default Ratings;
