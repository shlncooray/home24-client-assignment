import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'hooks/reduxHooks';
import { selectCurrentProductCategories } from 'store/slices/selectors';
import { ProductCategory } from 'models/product';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const styles = {
  productCatgoriesOuterBox: { display: 'flex', mt: 2, flex: 1 },
  productCategoriesPaper: { maxHeight: '100%', width: '100%', p: 2, pr: 4, overflow: 'auto' },
  productCategoriesBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    ml: 1,
  },
};

function ProductCategoriesBar({ isError }: { isError: boolean }) {
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
            {localCurrentProductsCategories.length > 0 && !isError ? (
              localCurrentProductsCategories.map((pc) => (
                <Button
                  key={pc.name}
                  variant="text"
                  sx={{ textTransform: 'none' }}
                  onClick={() => onCategoryClick(pc.urlPath)}
                >
                  <Typography sx={{ pb: 1 }}>{pc.name}</Typography>
                </Button>
              ))
            ) : (
              <Typography>-No Data-</Typography>
            )}
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
}

export default ProductCategoriesBar;
