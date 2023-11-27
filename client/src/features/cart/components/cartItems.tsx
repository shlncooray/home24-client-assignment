/*
 * File name: cartItems.tsx
 * Purpose: Shopping Cart Items List
 * Created on Sun Nov 25 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { DeleteForeverOutlined } from '@mui/icons-material';
import { Box, Divider, IconButton, Paper, Typography } from '@mui/material';
import { CartProduct } from 'models/cart';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'store/hooks';
import { setRemoveProduct } from 'store/slices/cart.slice';
import { convertToCurrency } from 'utils/formatting';
import { useNavigate } from 'react-router-dom';
import { setProduct } from 'store/slices/product.slice';
import { toast } from 'react-toastify';
import styles from '../styles';

function CartItems({
  cartItems,
  cartQuantity,
}: {
  cartItems: CartProduct[];
  cartQuantity: number;
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <Paper sx={styles.cartItemsPaper}>
      <Typography variant="h5">{`${t('cart.title')} (${cartQuantity} ${t(
        'cart.items',
      )})`}</Typography>

      {cartItems.map((s) => (
        <>
          <Box
            sx={styles.cartItemsOuterBox}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(setProduct(s.product));
              navigate(`${s.product.url}`);
            }}
          >
            <Box width={300} sx={styles.cartItemImageBox}>
              <img
                src={s.product.image}
                height={200}
                alt={s.product.name}
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Box sx={styles.cartItemContentBox}>
              <Box sx={styles.cartItemContentBoxInner}>
                <Typography variant="subtitle1">{s.product.name}</Typography>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(setRemoveProduct(s.product));
                    toast.warn(
                      `${t('cart.removePrefix')} "${s.product.name}" ${t('cart.removeSuffix')}`,
                    );
                  }}
                  aria-label="Remove from cart"
                >
                  <DeleteForeverOutlined />
                </IconButton>
              </Box>
              <Typography variant="body2">{s.product.variantName}</Typography>
              <Typography variant="h6">
                {convertToCurrency(s.product.price, s.product.currency)}
              </Typography>
            </Box>
          </Box>
          <Divider />
        </>
      ))}
    </Paper>
  );
}

export default CartItems;
