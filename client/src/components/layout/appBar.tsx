/*
 * File name: appBar.tsx
 * Purpose: Application Appbar to use across the app
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { AppBar, Badge, Box, Button, IconButton, Toolbar } from '@mui/material';
import { Menu, AddShoppingCart } from '@mui/icons-material';
import LanguageSwitcher from 'components/molecules/languageSwitcher';
import { useTranslation } from 'react-i18next';
import { languages } from 'constants/metaData';

function Home24AppBar({
  cartItems,
  appBarMenuAction,
  navigateToCart,
}: {
  cartItems: number;
  appBarMenuAction: () => void;
  navigateToCart: () => void;
}) {
  const { t } = useTranslation();

  return (
    <AppBar position="sticky" color="default">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
          <Button variant="outlined" sx={{ m: 2 }} onClick={appBarMenuAction}>
            <Menu />
          </Button>
          <img src="/logo.svg" width={120} alt="logo" />
        </Box>

        <Box sx={{ display: 'flex' }}>
          <LanguageSwitcher languages={languages} />
          <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            {t('loginButton')}
          </Button>
          <IconButton onClick={navigateToCart}>
            <Badge badgeContent={cartItems || 0} color="primary">
              <AddShoppingCart fontSize="medium" color="primary" />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Home24AppBar;
