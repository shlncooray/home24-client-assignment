/*
 * File name: product.helper.ts
 * Purpose: Helper Function for Products related Operations
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { productCategories } from 'constants/metaData';
import { MainCategory } from 'models/categories';

/**
 * getMainCategory returns a Category by given Category name(title)
 * @param name category title
 * @returns
 */
const getMainCategory = (name: String): MainCategory | undefined => {
  return productCategories.find((pc) => pc.title === name);
};

// eslint-disable-next-line import/prefer-default-export
export { getMainCategory };
