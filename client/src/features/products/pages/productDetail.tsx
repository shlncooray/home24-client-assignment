/*
 * File name: productDetail.tsx
 * Purpose: Product Detail Page
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { Button, Container, Grid, Skeleton, Typography } from '@mui/material';
import { useAppSelector } from 'store/hooks';
import { selectCurrentProduct } from 'store/slices/selectors';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductDetailImage from '../components/productDetailImage';
import ProductDetailForm from '../components/productDetailForm';
import styles from '../styles';

function ProductDetail() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mainCategory: mainCategoryParam } = useParams();
  const selectedProduct = useAppSelector(selectCurrentProduct);

  if (!selectedProduct) {
    return (
      <Container sx={{ mt: 3 }} maxWidth={false}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Container>
    );
  }

  return (
    <Container sx={styles.productDetailContainer} maxWidth={false}>
      {/** #TODO - Make this into a Breadcum and move to a common component */}
      <Container sx={styles.categoriesTopBarLarge}>
        <Button variant="text" sx={{ textTransform: 'none' }} onClick={() => navigate('/')}>
          <Typography sx={styles.homeButtonText} variant="h6">
            {t('home')} /
          </Typography>
        </Button>
        <Button
          variant="text"
          sx={{ textTransform: 'none' }}
          onClick={() => navigate(`/products/${mainCategoryParam}`)}
        >
          <Typography sx={styles.homeButtonText} variant="h6">
            {t(`productCategories.${mainCategoryParam?.toLowerCase()}`)}
          </Typography>
        </Button>
      </Container>
      <Grid container spacing={3}>
        <ProductDetailImage currentProduct={selectedProduct} />
        <ProductDetailForm currentProduct={selectedProduct} />
      </Grid>
    </Container>
  );
}

export default ProductDetail;
