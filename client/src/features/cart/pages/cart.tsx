/*
 * File name: cart.tsx
 * Purpose: Shopping Cart Page(Screen)
 * Created on Sun Nov 24 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { Container, Grid, Skeleton } from '@mui/material';
import { useAppSelector } from 'store/hooks';
import {
  selectCartQuantity,
  selectCartTotal,
  selectSelectedProducts,
} from 'store/slices/selectors';
import CartItems from '../components/cartItems';
import CartSummary from '../components/cartSummary';
import styles from '../styles';

function Cart() {
  const selectedProductList = useAppSelector(selectSelectedProducts);
  const cartQuantity = useAppSelector(selectCartQuantity);
  const cartTotal = useAppSelector(selectCartTotal);

  // Display Skelton if selectedProductList till loading
  if (!selectedProductList) {
    return (
      <Container sx={{ mt: 3 }} maxWidth={false}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Container>
    );
  }

  return (
    <Container sx={styles.cartContainer} maxWidth={false}>
      <Grid container spacing={3}>
        <Grid item lg={8} md={8} sm={12} xs={12} sx={{ mt: 2, mb: 4 }}>
          <CartItems cartItems={selectedProductList} cartQuantity={cartQuantity} />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12} sx={{ mt: 2, mb: 4 }}>
          <CartSummary cartQuantity={cartQuantity} cartTotal={cartTotal} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cart;
