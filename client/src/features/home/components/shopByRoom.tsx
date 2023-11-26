/*
 * File name: shopByRoom.tsx
 * Purpose: Landing Page Room Category List
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { Box, Container, Typography } from '@mui/material';
import { SimpleImageCard } from 'components/molecules';
import { roomCategories } from 'constants/metaData';

// #TODO - Shop by Room is just a place holder category thinking about adding somethins similar to 'ShopByCategory'
function ShopByRoom() {
  return (
    <Container sx={{ mt: 3 }} maxWidth={false}>
      <Typography variant="subtitle1">Shop By Room</Typography>
      <Box sx={{ display: 'flex' }}>
        {roomCategories.map((p) => (
          <SimpleImageCard key={p.id} image={p.imageUrl} title={p.title} />
        ))}
      </Box>
    </Container>
  );
}

export default ShopByRoom;