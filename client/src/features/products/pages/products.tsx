import {
  Button,
  Container,
  Drawer,
  Grid,
  Skeleton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { TuneOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'hooks/reduxHooks';
import { setProductResponse } from 'store/slices/product.slice';
import theme from 'styles/theme';
import { useLazyGetProductListQuery } from 'store/apiSlices/productsGraphql.slice';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useProductFetcher, useSetFetchedProductList } from 'hooks/productsHooks';
import configs from 'project.config.json';
import { toast } from 'react-toastify';
import ProductList from '../components/productList';
import ProductCategoriesBar from '../components/productCategories';

const styles = {
  productContainer: {
    flexGrow: 1,
    background: '#EEEEEF',
    pt: 4,
  },
  categoriesTopBarSmall: { p: '0px !important', mt: 0 },
  categoriesTopBarLarge: {
    ml: '0px !important',
    pl: '0px',
    display: 'flex',
    flexDirection: 'row',
  },
  buttonText: { textTransform: 'none' },
  homeButtonText: { mr: 2 },
  categoryNameText: { pt: 1, pb: 1, mr: 2 },
};

function Products() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { mainCategory: mainCategoryParam } = useParams();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [isOpen, setIsOpen] = useState(false);

  const [getProducts, { data: productResponse, isSuccess, isLoading: isProductsLoading, isError }] =
    useLazyGetProductListQuery();

  const getAsyncProducts = async (id: String) => {
    try {
      // #TODO - Graphql API locale is currently not changing since EN related data couldn't able to find from API
      // Uncomment below line to see error scenario in API data. You may see two toast messages since it's React.StrictMode
      // await getProducts({ id, locale: 'en_EN' }).unwrap();
      await getProducts({ id, locale: configs.DEFUALT_LANGUAGE_CODE }).unwrap();
    } catch (error) {
      toast.error('Something went wrong while fetching data..!');
    }
  };

  useEffect(() => {
    if (productResponse && isSuccess) {
      dispatch(setProductResponse(productResponse));
    }
  }, [productResponse, isSuccess]);

  useProductFetcher(mainCategoryParam, getAsyncProducts);
  useSetFetchedProductList(mainCategoryParam);

  if (isProductsLoading) {
    return (
      <Container sx={styles.productContainer} maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} height="750px">
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Grid>
          <Grid item xs={12} md={9} height="750px">
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Grid>
        </Grid>
      </Container>
    );
  }

  return (
    <Container sx={styles.productContainer} maxWidth={false}>
      {isSmallScreen ? (
        <Container sx={styles.categoriesTopBarSmall}>
          <Button variant="outlined" startIcon={<TuneOutlined />} onClick={() => setIsOpen(true)}>
            {t('categoriesTitle')}
          </Button>
        </Container>
      ) : (
        // #TODO - Make this into a Breadcum and move to a common component
        <Container sx={styles.categoriesTopBarLarge}>
          <Button variant="text" sx={styles.buttonText} onClick={() => navigate('/')}>
            <Typography sx={styles.homeButtonText} variant="h6">
              {t('home')} /
            </Typography>
          </Button>
          <Typography sx={styles.categoryNameText} variant="h6">
            {t(`productCategories.${mainCategoryParam?.toLowerCase()}`)}
          </Typography>
        </Container>
      )}

      {/* For Large & Medium Screen */}
      {!isSmallScreen && (
        <Grid container spacing={3}>
          <ProductCategoriesBar isError={isError} />
          <ProductList isError={isError} />
        </Grid>
      )}
      {/* For Small to XSmall Screen */}
      {isSmallScreen && (
        <Grid container spacing={3}>
          <ProductList isError={isError} />
        </Grid>
      )}
      <Drawer open={isOpen} onClose={() => setIsOpen(!isOpen)} anchor="right">
        <ProductCategoriesBar isError={isError} />
      </Drawer>
    </Container>
  );
}

export default Products;
