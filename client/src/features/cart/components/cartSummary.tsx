/*
 * File name: cartSummary.tsx
 * Purpose: Shopping Cart Summary
 * Created on Sun Nov 25 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { Paper, Box, Typography, Divider, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { convertToCurrency } from 'utils/formatting';
import styles from '../styles';

function CartSummary({ cartQuantity, cartTotal }: { cartQuantity: number; cartTotal: number }) {
  const { t } = useTranslation();

  return (
    <Paper sx={styles.cartSummaryPaper}>
      <Box sx={styles.cartSummaryOuterBox}>
        <Typography variant="h5">{t('cart.summary')}</Typography>
        <Typography variant="h6">{`(${cartQuantity} ${t('cart.items')})`}</Typography>
      </Box>
      <Divider />
      <Box sx={styles.cartSummaryTextWrapper}>
        <Typography variant="subtitle2">{t('cart.subTotal')}</Typography>
        <Typography variant="body1">{convertToCurrency(cartTotal, 'EUR')}</Typography>
      </Box>
      <Box sx={styles.cartSummaryTextWrapper}>
        <Typography variant="subtitle2">{t('cart.shipping')}</Typography>
        <Typography variant="body1">{convertToCurrency(cartTotal * 0.1, 'EUR')}</Typography>
      </Box>
      <Divider />
      <Box sx={styles.cartSummaryTextWrapper}>
        <Typography variant="subtitle1">{t('cart.totalInclVat')}</Typography>
        <Typography variant="subtitle1">
          {convertToCurrency(cartTotal + cartTotal * 0.1, 'EUR')}
        </Typography>
      </Box>
      <Box sx={styles.cartSummaryButtonWrapper}>
        <Button type="submit">{t('cart.proceedToCheckOut')}</Button>
      </Box>
    </Paper>
  );
}

export default CartSummary;
