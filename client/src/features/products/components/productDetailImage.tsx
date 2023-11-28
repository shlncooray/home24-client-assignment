import { Card, CardMedia, Grid } from '@mui/material';
import { Product } from 'models/product';

const styles = {
  productImageGrid: { mt: 2, mb: 4 },
  productDetailImage: { width: '100%', flex: '1 0 auto', objectFit: 'contain' },
};

function ProductDetailImage({ currentProduct }: { currentProduct: Product }) {
  return (
    <Grid item lg={6} md={6} sm={12} xs={12} sx={styles.productImageGrid}>
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
