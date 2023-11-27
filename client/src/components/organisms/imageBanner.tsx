/*
 * File name: imageSlider.tsx
 * Purpose: Image Banner which can be used across application
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { HomePageBanner } from 'models/metaData';

function ImageBanner({ banner }: { banner: HomePageBanner }) {
  const theme = useTheme();
  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <Box
        component="img"
        sx={{
          height: 394,
          display: 'block',
          overflow: 'hidden',
          width: '100%',
        }}
        src={banner.imgPath}
        alt={banner.mainTitle}
      />
      <Box sx={{ position: 'absolute', top: '10%', left: '5%' }}>
        <Typography sx={{ mb: 3 }} variant="subtitle2" color={theme.palette.common.white}>
          {banner.topLabel}
        </Typography>
        <Typography sx={{ mb: 2 }} variant="h4" color={theme.palette.common.white}>
          {banner.mainTitle}
        </Typography>
        <Typography sx={{ mb: 10 }} variant="subtitle1" color={theme.palette.common.white}>
          {banner.description}
        </Typography>
        <Button
          sx={{
            backgroundColor: theme.palette.common.white,
            color: theme.palette.common.black,
          }}
        >
          <Typography>{banner.button}</Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default ImageBanner;
