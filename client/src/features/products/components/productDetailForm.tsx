/*
 * File name: productDetailForm.tsx
 * Purpose: Product Details & Add to Cart quanityt form
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { useAppDispatch } from 'store/hooks';
import { Product } from 'models/product';
import { convertToCurrency } from 'utils/formatting';
import { setSelectedProducts } from 'store/slices/cart.slice';
import { Ratings } from 'components/atoms';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface CartFormInputs {
  productQty: number;
}

function ProductDetailForm({ currentProduct }: { currentProduct: Product }) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      productQty: 0,
    },
  });

  const onSubmit: SubmitHandler<CartFormInputs> = (data) => {
    dispatch(setSelectedProducts({ product: currentProduct, quantity: data.productQty as number }));
  };

  return (
    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2, mb: 4 }}>
      <Card sx={{ mb: 2 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography gutterBottom variant="h4" component="div">
            {currentProduct.name}
          </Typography>
          <Ratings count={currentProduct.rating.count} rate={currentProduct.rating.average} />
          <Typography gutterBottom variant="subtitle2" component="div">
            {currentProduct.variantName}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            {convertToCurrency(currentProduct.price, currentProduct.currency)}
          </Typography>
        </CardContent>
      </Card>
      <Card component="form" onSubmit={handleSubmit(onSubmit)}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography gutterBottom variant="h5" component="div">
            {t('productDetail.addToCartTitle')}
          </Typography>
          <Controller
            control={control}
            name="productQty"
            rules={{
              min: 0,
              max: 20,
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type="number"
                InputProps={{ inputProps: { min: 1, max: 50 } }}
                {...register('productQty', { max: 50, min: 0 })}
              />
            )}
          />
          <Button type="submit" sx={{ ml: 3 }}>
            {t('productDetail.addToCart')}
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProductDetailForm;