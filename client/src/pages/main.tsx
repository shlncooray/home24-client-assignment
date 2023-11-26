/*
 * File name: main.tsx
 * Purpose: Application Main Container Page
 * Created on Sun Nov 20 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Home24AppBar, AppFooter, SideMenu } from 'components/layout';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { selectCartQuantity } from 'store/slices/selectors';
import { productCategories } from 'constants/metaData';

function Main() {
  const navigate = useNavigate();
  const cartQty = useAppSelector(selectCartQuantity);
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [localCartyQty, setLocalCartyQty] = useState(0);

  useEffect(() => {
    if (cartQty) {
      setLocalCartyQty(cartQty);
    } else {
      setLocalCartyQty(0);
    }
  }, [cartQty]);

  const onCategoryClick = (path: String) => {
    navigate(`/products/${path}`);
  };

  return (
    <div style={{ height: '100%' }}>
      <Home24AppBar
        cartItems={localCartyQty}
        appBarMenuAction={() => {
          setSideMenuOpen(true);
        }}
        navigateToCart={() => {
          navigate('/cart');
        }}
      />

      <Box>
        <Outlet />
      </Box>

      <AppFooter />
      <SideMenu
        items={productCategories}
        isOpen={sideMenuOpen}
        onClose={() => setSideMenuOpen(false)}
        onItemClick={onCategoryClick}
      />
    </div>
  );
}

export default Main;