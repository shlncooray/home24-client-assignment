import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { useAppDispatch } from 'hooks/reduxHooks';
import { Product } from 'models/product';
import { convertToCurrency } from 'utils/formatting';
import { setSelectedProducts } from 'store/slices/cart.slice';
import { Ratings } from 'components/atoms';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type CartFormInputs = {
  productQty: number;
};

const styles = {
  productCardContent: { flex: '1 0 auto' },
};

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
        <CardContent sx={styles.productCardContent}>
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
        <CardContent sx={styles.productCardContent}>
          <Typography gutterBottom variant="h5" component="div">
            {t('productDetail.addToCartTitle')}
          </Typography>
          <Controller
            control={control}
            name="productQty"
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ mt: '5px' }}
                type="number"
                InputProps={{ inputProps: { min: 1, max: 50 } }}
                {...register('productQty', { min: 0, max: 50 })}
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
