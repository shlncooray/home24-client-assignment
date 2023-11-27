const cartContainer = { flexGrow: 1, background: '#EEEEEF', pt: 3, minHeight: '680px' };

const cartItemsPaper = { width: '100%', mt: 1, p: 3 };
const cartItemsOuterBox = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  mb: 3,
  cursor: 'pointer',
};
const cartItemImageBox = { display: 'flex', flex: 0.3, flexDirection: 'row', alignItems: 'center' };
const cartItemContentBox = { display: 'flex', flex: 0.7, flexDirection: 'column', ml: 3, mt: 2 };
const cartItemContentBoxInner = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const cartSummaryPaper = { width: '100%', mt: 1, p: 3 };
const cartSummaryOuterBox = {
  display: 'flex',
  flexDirection: 'row',
  mb: 1,
  justifyContent: 'space-between',
};
/*
 * File name: styles.tsx
 * Purpose: Shopping Cart related MUI Styles
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

const cartSummaryTextWrapper = { display: 'flex', mt: 1, justifyContent: 'space-between' };
const cartSummaryButtonWrapper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
  mt: 2,
};

export default {
  cartContainer,
  cartItemsPaper,
  cartItemsOuterBox,
  cartItemImageBox,
  cartItemContentBox,
  cartItemContentBoxInner,
  cartSummaryPaper,
  cartSummaryOuterBox,
  cartSummaryTextWrapper,
  cartSummaryButtonWrapper,
};
