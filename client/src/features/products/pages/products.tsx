/*
 * File name: products.tsx
 * Purpose: Product List Landing Page
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

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
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectCurrentCategory, selectCurrentProductResponse } from 'store/slices/selectors';
import { Product, ProductCategory } from 'models/product';
import { setProductCategories, setProductResponse, setProducts } from 'store/slices/product.slice';
import theme from 'styles/theme';
import { useLazyGetProductListQuery } from 'store/apiSlices/productsGraphql.slice';
import { useNavigate, useParams } from 'react-router-dom';
import { getMainCategory } from 'helpers/product.helper';
import { useTranslation } from 'react-i18next';
import ProductList from '../components/productList';
import ProductCategoriesBar from '../components/productCategories';
import style from '../styles';

function Products() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { mainCategory: mainCategoryParam } = useParams();
  const mainCategory = useAppSelector(selectCurrentCategory);
  const currentProductList = useAppSelector(selectCurrentProductResponse);

  const [getProducts, { data: productResponse, isSuccess, isLoading: isProductsLoading }] =
    useLazyGetProductListQuery();

  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const getAsyncProducts = async (id: String) => {
      await getProducts(id).unwrap();
    };
    if (mainCategory) {
      getAsyncProducts(mainCategory.id);
    }

    if (!mainCategory && mainCategoryParam) {
      if (getMainCategory(mainCategoryParam) !== undefined) {
        const id = getMainCategory(mainCategoryParam)?.id;
        getAsyncProducts(id!);
      }
    }
  }, [mainCategory, mainCategoryParam]);

  useEffect(() => {
    if (productResponse && isSuccess) {
      dispatch(setProductResponse(productResponse));
    }
  }, [productResponse, isSuccess]);

  useEffect(() => {
    if (currentProductList) {
      const productList: Product[] = [];
      const currentProductCategoryList: ProductCategory[] = [];
      currentProductList.categories.forEach((c) => {
        c.categoryArticles.articles.forEach((ca) => {
          productList.push({
            sku: ca.sku,
            name: ca.name,
            variantName: ca.variantName,
            image: ca.images[0].path,
            price: ca.prices.regular.value,
            currency: ca.prices.currency,
            rating: ca.ratings,
          });
        });
        c.childrenCategories.list.forEach((cc) => {
          currentProductCategoryList.push({
            name: cc.name,
            urlPath: cc.urlPath,
          });
        });
      });
      dispatch(setProducts(productList));
      dispatch(setProductCategories(currentProductCategoryList));
    }
  }, [currentProductList]);

  if (isProductsLoading) {
    return (
      <Container sx={style.productContainer} maxWidth={false}>
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
    <Container sx={style.productContainer} maxWidth={false}>
      {isSmallScreen ? (
        <Container sx={style.categoriesTopBarSmall}>
          <Button variant="outlined" startIcon={<TuneOutlined />} onClick={() => setIsOpen(true)}>
            Product Categories
          </Button>
        </Container>
      ) : (
        // #TODO - Make this into a Breadcum and move to a common component
        <Container sx={style.categoriesTopBarLarge}>
          <Button variant="text" sx={{ textTransform: 'none' }} onClick={() => navigate('/')}>
            <Typography sx={style.homeButtonText} variant="h6">
              {t('home')} /
            </Typography>
          </Button>
          <Typography sx={style.categoryNameText} variant="h6">
            {t(`productCategories.${mainCategoryParam?.toLowerCase()}`)}
          </Typography>
        </Container>
      )}

      {/* For Large & Medium Screen */}
      {!isSmallScreen && (
        <Grid container spacing={3}>
          <ProductCategoriesBar />
          <ProductList />
        </Grid>
      )}
      {/* For Small to XSmall Screen */}
      {isSmallScreen && (
        <Grid container spacing={3}>
          <ProductList />
        </Grid>
      )}
      <Drawer open={isOpen} onClose={() => setIsOpen(!isOpen)} anchor="right">
        <ProductCategoriesBar />
      </Drawer>
    </Container>
  );
}

export default Products;
