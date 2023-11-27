/*
 * File name: productCategories.tsx
 * Purpose: Product Catory Side Bar
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'store/hooks';
import { selectCurrentProductCategories } from 'store/slices/selectors';
import { ProductCategory } from 'models/product';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from '../styles';

function ProductCategoriesBar() {
  const { t } = useTranslation();
  const currentProductsCategories = useAppSelector(selectCurrentProductCategories);
  const navigate = useNavigate();

  const [localCurrentProductsCategories, setLocalCurrentProductsCategories] = useState<
    ProductCategory[]
  >([]);

  // #TODO - Filter out products under each children category and display them only on product listing page
  const onCategoryClick = (urlPath: string) => {
    navigate(`/products/${urlPath}`);
  };

  useEffect(() => {
    if (currentProductsCategories) {
      setLocalCurrentProductsCategories(currentProductsCategories);
    }
  }, [currentProductsCategories]);

  return (
    <Grid item lg={3} md={3}>
      <Box sx={styles.productCatgoriesOuterBox}>
        <Paper sx={styles.productCategoriesPaper}>
          <Typography variant="subtitle1" sx={{ pb: 1 }}>
            {t('productCategories')}
          </Typography>
          <Box sx={styles.productCategoriesBox}>
            {localCurrentProductsCategories.length > 0 &&
              localCurrentProductsCategories.map((pc) => (
                <Button
                  key={pc.name}
                  variant="text"
                  sx={{ textTransform: 'none' }}
                  onClick={() => onCategoryClick(pc.urlPath)}
                >
                  <Typography sx={{ pb: 1 }}>{pc.name}</Typography>
                </Button>
              ))}
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
}

export default ProductCategoriesBar;
