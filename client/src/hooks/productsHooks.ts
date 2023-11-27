import { getMainCategory } from 'helpers/product.helper';
import { useEffect } from 'react';
import { selectCurrentCategory, selectCurrentProductResponse } from 'store/slices/selectors';
import { Product, ProductCategory } from 'models/product';
import { setProductCategories, setProducts } from 'store/slices/product.slice';
import { useAppDispatch, useAppSelector } from './reduxHooks';

type GetAsyncProductsFunction = (id: string) => Promise<void>;

/**
 * Custom Hook for fetch Product List when page refresh based on current url
 * @param mainCategoryParam
 * @param getAsyncProducts
 */
const useProductFetcher = (
  mainCategoryParam: String | undefined,
  getAsyncProducts: GetAsyncProductsFunction,
) => {
  const mainCategory = useAppSelector(selectCurrentCategory);
  useEffect(() => {
    if (mainCategory) {
      getAsyncProducts(mainCategory.id);
    }

    if (!mainCategory && mainCategoryParam) {
      const mainCategoryInfo = getMainCategory(mainCategoryParam);
      if (mainCategoryInfo !== undefined) {
        const { id } = mainCategoryInfo;
        getAsyncProducts(id);
      }
    }
  }, [mainCategory, mainCategoryParam]);
};

/**
 * Custome Hook for set Fetched product and category list to Redux state
 * @param mainCategoryParam
 */
const useSetFetchedProductList = (mainCategoryParam: String | undefined) => {
  const dispatch = useAppDispatch();
  const currentProductList = useAppSelector(selectCurrentProductResponse);
  useEffect(() => {
    if (currentProductList) {
      const productList: Product[] = [];
      const currentProductCategoryList: ProductCategory[] = [];
      currentProductList.categories.forEach((c) => {
        c.categoryArticles.articles.forEach((ca) => {
          productList.push({
            sku: ca.sku,
            name: ca.name,
            variantName: ca.variantName,
            image: ca.images[0].path,
            price: ca.prices.regular.value,
            currency: ca.prices.currency,
            rating: ca.ratings,
            url: `/products/${mainCategoryParam}/${ca.name}`,
          });
        });
        c.childrenCategories.list.forEach((cc) => {
          currentProductCategoryList.push({
            name: cc.name,
            urlPath: cc.urlPath,
          });
        });
      });
      dispatch(setProducts(productList));
      dispatch(setProductCategories(currentProductCategoryList));
    }
  }, [currentProductList]);
};

export { useProductFetcher, useSetFetchedProductList };
