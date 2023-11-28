import { Grid, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { selectCurrentProducts } from 'store/slices/selectors';
import { Product } from 'models/product';
import ComplexImageCard from 'components/molecules/complexImageCard';
import { convertToCurrency } from 'utils/formatting';
import { setSelectedProducts } from 'store/slices/cart.slice';
import { setProduct } from 'store/slices/product.slice';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const styles = {
  productListGrid: { mt: 2, mb: 4 },
  productErrorPaper: {
    display: 'flex',
    flexGrow: 1,
    height: '200px',
    mt: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

function ProductList({ isError }: { isError: boolean }) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentProducts = useAppSelector(selectCurrentProducts);
  const { mainCategory: mainCategoryParam } = useParams();

  const [localCurrentProducts, setLocalCurrentProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (currentProducts) {
      setLocalCurrentProducts(currentProducts);
    }
  }, [currentProducts]);

  return (
    <Grid item lg={9} md={9} sm={12} xs={12} sx={styles.productListGrid}>
      <Grid container spacing={2} sx={{ minHeight: '550px' }}>
        {localCurrentProducts.length > 0 && !isError ? (
          localCurrentProducts.map((cp) => (
            <Grid item key={`${cp.name}-${cp.price}`} lg={4} md={6} sm={6} xs={12}>
              {/* #TODO - Implement Like button functionality */}
              <ComplexImageCard
                key={cp.name}
                image={cp.image}
                mainLabel={cp.name}
                rating={cp.rating}
                priceLabel={convertToCurrency(cp.price, cp.currency).toString()}
                mainActionLabel={t('productDetail.addToCart')}
                onClick={() => {
                  dispatch(setProduct(cp));
                  navigate(`/products/${mainCategoryParam}/${cp.name}`);
                }}
                mainAction={() => {
                  toast.success(
                    `${t('cart.successAddPrefix')} "${cp.name}" ${t('cart.successAddSuffix')}`,
                  );
                  dispatch(setSelectedProducts({ product: cp, quantity: 1 }));
                }}
              />
            </Grid>
          ))
        ) : (
          <Paper sx={styles.productErrorPaper}>
            <Typography>-No Data-</Typography>
          </Paper>
        )}
      </Grid>
    </Grid>
  );
}

export default ProductList;
