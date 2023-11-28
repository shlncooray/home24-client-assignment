import { Paper, Box, Typography, Divider, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { convertToCurrency } from 'utils/formatting';
import { EURO, SHIPPING_COST_PER } from 'constants/utilConstant';

const styles = {
  cartSummaryPaper: { width: '100%', mt: 1, p: 3 },
  cartSummaryOuterBox: {
    display: 'flex',
    flexDirection: 'row',
    mb: 1,
    justifyContent: 'space-between',
  },

  cartSummaryTextWrapper: { display: 'flex', mt: 1, justifyContent: 'space-between' },
  cartSummaryButtonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
    mt: 2,
  },
};

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
        <Typography variant="body1">{convertToCurrency(cartTotal, EURO)}</Typography>
      </Box>
      <Box sx={styles.cartSummaryTextWrapper}>
        <Typography variant="subtitle2">{t('cart.shipping')}</Typography>
        <Typography variant="body1">
          {convertToCurrency(cartTotal * SHIPPING_COST_PER, EURO)}
        </Typography>
      </Box>
      <Divider />
      <Box sx={styles.cartSummaryTextWrapper}>
        <Typography variant="subtitle1">{t('cart.totalInclVat')}</Typography>
        <Typography variant="subtitle1">
          {convertToCurrency(cartTotal + cartTotal * SHIPPING_COST_PER, EURO)}
        </Typography>
      </Box>
      <Box sx={styles.cartSummaryButtonWrapper}>
        <Button type="submit">{t('cart.proceedToCheckOut')}</Button>
      </Box>
    </Paper>
  );
}

export default CartSummary;
