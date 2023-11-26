/*
 * File name: productList.tsx
 * Purpose: Product List Component
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectCurrentProducts } from 'store/slices/selectors';
import { Product } from 'models/product';
import ComplexImageCard from 'components/molecules/complexImageCard';
import { convertToCurrency } from 'utils/formatting';
import { setSelectedProducts } from 'store/slices/cart.slice';
import { setProduct } from 'store/slices/product.slice';
import { useNavigate, useParams } from 'react-router-dom';

function ProductList() {
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
    <Grid item lg={9} md={9} sm={12} xs={12} sx={{ mt: 2, mb: 4 }}>
      <Grid container spacing={2}>
        {localCurrentProducts.length > 0 &&
          localCurrentProducts.map((cp) => (
            <Grid item key={cp.name} lg={4} md={6} sm={6} xs={12}>
              <ComplexImageCard
                image={cp.image}
                mainLabel={cp.name}
                rating={cp.rating}
                priceLabel={convertToCurrency(cp.price, cp.currency).toString()}
                onClick={() => {
                  dispatch(setProduct(cp));
                  navigate(`/products/${mainCategoryParam}/${cp.name}`);
                }}
                mainAction={() => {
                  dispatch(setSelectedProducts({ product: cp, quantity: 1 }));
                }}
              />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
}

export default ProductList;
