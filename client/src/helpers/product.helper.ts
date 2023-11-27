import { PRODUCT_CATEGORIES } from 'constants/metaData';
import { MainCategory } from 'models/categories';

/**
 * getMainCategory returns a Category by given Category name(title)
 * @param name category title
 * @returns
 */
const getMainCategory = (name: String): MainCategory | undefined => {
  return PRODUCT_CATEGORIES.find((pc) => pc.title === name);
};

export { getMainCategory };
