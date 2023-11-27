const productContainer = {
  flexGrow: 1,
  background: '#EEEEEF',
  pt: 4,
};

const categoriesTopBarSmall = { p: '0px !important', mt: 0 };

const categoriesTopBarLarge = {
  ml: '0px !important',
  pl: '0px',
  display: 'flex',
  flexDirection: 'row',
};

const homeButtonText = { mr: 2 };

const categoryNameText = { pt: 1, pb: 1, mr: 2 };

const productCatgoriesOuterBox = { display: 'flex', mt: 2, flex: 1 };
const productCategoriesPaper = { maxHeight: '100%', width: '100%', p: 2, pr: 4, overflow: 'auto' };
const productCategoriesBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  ml: 1,
};

const productDetailContainer = { flexGrow: 1, background: '#EEEEEF', pt: 3, minHeight: '680px' };
const productDetailImage = { width: '100%', flex: '1 0 auto', objectFit: 'contain' };

export default {
  productContainer,
  categoriesTopBarSmall,
  categoriesTopBarLarge,
  homeButtonText,
  categoryNameText,
  productCatgoriesOuterBox,
  productCategoriesPaper,
  productCategoriesBox,
  productDetailContainer,
  productDetailImage,
};
