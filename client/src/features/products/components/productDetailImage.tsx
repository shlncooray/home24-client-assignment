/*
 * File name: productDetailImage.tsx
 * Purpose: Product Detail Page Image
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { Card, CardMedia, Grid } from '@mui/material';
import { Product } from 'models/product';
import styles from '../styles';

function ProductDetailImage({ currentProduct }: { currentProduct: Product }) {
  return (
    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2, mb: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height={400}
          sx={styles.productDetailImage}
          image={currentProduct.image}
          title={currentProduct.name}
        />
      </Card>
    </Grid>
  );
}

export default ProductDetailImage;
