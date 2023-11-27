import { Button, Container, Grid, Skeleton, Typography } from '@mui/material';
import { useAppSelector } from 'hooks/reduxHooks';
import { selectCurrentProduct } from 'store/slices/selectors';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductDetailImage from '../components/productDetailImage';
import ProductDetailForm from '../components/productDetailForm';

const styles = {
  productDetailContainer: { flexGrow: 1, background: '#EEEEEF', pt: 3, minHeight: '680px' },
  categoriesTopBarLarge: {
    ml: '0px !important',
    pl: '0px',
    display: 'flex',
    flexDirection: 'row',
  },
  buttonText: { textTransform: 'none' },
  homeButtonText: { mr: 2 },
};

/**  #TODO - Make this page refreshable. There is an issue when reloading
 *   a Product Detail page due to it's not manage in local storage
 */
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
        <Button variant="text" sx={styles.buttonText} onClick={() => navigate('/')}>
          <Typography sx={styles.homeButtonText} variant="h6">
            {t('home')} /
          </Typography>
        </Button>
        <Button
          variant="text"
          sx={styles.buttonText}
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
