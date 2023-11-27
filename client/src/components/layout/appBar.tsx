import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar } from '@mui/material';
import { Menu, AddShoppingCart } from '@mui/icons-material';
import LanguageSwitcher from 'components/molecules/languageSwitcher';
import { LAGUAGSES } from 'constants/metaData';
import styles from './styles';

function Home24AppBar({
  cartItems,
  loginButtonLabel,
  loginButtonPath,
  appBarMenuAction,
  navigateToCart,
}: {
  cartItems: number;
  loginButtonLabel: String;
  loginButtonPath: String;
  appBarMenuAction: () => void;
  navigateToCart: () => void;
}) {
  return (
    <AppBar position="sticky" color="default">
      <Toolbar sx={styles.toolBar}>
        <Box sx={{ display: 'flex' }}>
          <Button variant="outlined" sx={{ m: 2 }} onClick={appBarMenuAction}>
            <Menu />
          </Button>
          <Link href="/" sx={{ pt: 2 }}>
            <img src="/logo.svg" width={120} alt="logo" />
          </Link>
        </Box>

        <Box sx={{ display: 'flex' }}>
          <LanguageSwitcher languages={LAGUAGSES} />
          <Button href={loginButtonPath.toString()} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            {loginButtonLabel}
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
