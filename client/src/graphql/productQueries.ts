const getProductsQuery = (id: String, locale: String) => {
  return `
          {
            categories: productLists(ids: "${id}", locale: ${locale}) {
              name
              articleCount
              childrenCategories: childrenProductLists {
                list {
                  name
                  urlPath
                }
              }
              categoryArticles: articlesList(first: 50) {
                articles {
                  name
                  variantName
                  sku
                  variantName
                  prices {
                    currency
                    regular {
                      value
                    }
                  }
                  ratings {
                    count
                    average
                  }
                  images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 1) {
                    path
                  }
                }
              }
            }
          }
        `;
};

export { getProductsQuery };
