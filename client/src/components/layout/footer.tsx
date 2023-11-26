/*
 * File name: footer.tsx
 * Purpose: Application Footer to use across the app
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { Box, Typography } from '@mui/material';

function AppFooter({ mainLabel, description }: { mainLabel: String; description: String }) {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      {/** Reading data from a env file - REACT_APP_BRAND_NAME */}
      <Typography variant="h6" align="center" gutterBottom>
        {mainLabel}
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
        {description}
      </Typography>
    </Box>
  );
}

export default AppFooter;
