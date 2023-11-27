import { Product, ProductCategory, ProductListResponse, ProductSliceState } from 'models/product';
import productReducer, {
  setProduct,
  setProducts,
  setProductResponse,
  setProductCategories,
} from './product.slice';

describe('productSlice reducer', () => {
  it('should handle setProduct action', () => {
    const initialState: ProductSliceState = {
      product: null,
      products: [],
      productCategories: [],
      productResponse: null,
    };

    const newProduct: Product = {
      name: 'Test Product',
      variantName: 'Test Variant',
      sku: 'test-sku',
      image: 'test-image.jpg',
      price: 10,
      currency: 'USD',
      rating: { count: 5, average: 4.5 },
    };

    const action = setProduct(newProduct);
    const nextState = productReducer(initialState, action);

    expect(nextState.product).toEqual(newProduct);
  });

  it('should handle setProducts action', () => {
    const initialState: ProductSliceState = {
      product: null,
      products: [],
      productCategories: [],
      productResponse: null,
    };

    const newProducts: Product[] = [
      {
        name: 'Product 1',
        variantName: 'Variant 1',
        sku: 'sku-1',
        image: 'image-1.jpg',
        price: 20,
        currency: 'USD',
        rating: { count: 3, average: 4.0 },
      },
    ];

    const action = setProducts(newProducts);
    const nextState = productReducer(initialState, action);

    expect(nextState.products).toEqual(newProducts);
  });

  it('should handle setProductResponse action', () => {
    const initialState: ProductSliceState = {
      product: null,
      products: [],
      productCategories: [],
      productResponse: null,
    };

    const newProductResponse: ProductListResponse = {
      categories: [
        {
          articleCount: 2,
          name: 'Category 1',
          childrenCategories: {
            list: [
              {
                name: 'Polstermöbel',
                urlPath: 'alle-polstermoebel/',
              },
              {
                name: 'Betten',
                urlPath: 'alle-betten/',
              },
            ],
          },
          categoryArticles: {
            articles: [
              {
                name: 'Lattenrost Driggs I',
                variantName: 'nicht verstellbar - Birke / Silber - 160 x 200cm',
                sku: '000000001000201491',
                prices: {
                  currency: 'EUR',
                  regular: {
                    value: 20999,
                  },
                },
                ratings: {
                  count: 83,
                  average: 4.5,
                },
                images: [
                  {
                    path: 'https://cdn1.home24.net/images/media/catalog/product/200x200/png/-/1/-1000201491-200226-15063500003-IMAGE-P000000001000201491.webp',
                  },
                ],
              },
              {
                name: 'Schminktisch „Sherry“ Weiß Hochglanz mit',
                variantName: 'Weiß - Holz teilmassiv - 120 x 75 x 55 cm',
                sku: '000000003000171244',
                prices: {
                  currency: 'EUR',
                  regular: {
                    value: 36990,
                  },
                },
                ratings: {
                  count: 0,
                  average: 0,
                },
                images: [
                  {
                    path: 'https://cdn1.home24.net/images/media/catalog/product/200x200/png/b/f/bf4bfa1334da4f2d859661c9bcc82fff.cropped-99-30-770-944.processed.webp',
                  },
                ],
              },
            ],
          },
        },
        // Add more categories as needed
      ],
    };

    const action = setProductResponse(newProductResponse);
    const nextState = productReducer(initialState, action);

    expect(nextState.productResponse).toEqual(newProductResponse);
  });

  it('should handle setProductCategories action', () => {
    const initialState: ProductSliceState = {
      product: null,
      products: [],
      productCategories: [],
      productResponse: null,
    };

    const newProductCategories: ProductCategory[] = [
      { name: 'Category 1', urlPath: '/category-1' },
      { name: 'Category 2', urlPath: '/category-2' },
    ];

    const action = setProductCategories(newProductCategories);
    const nextState = productReducer(initialState, action);

    expect(nextState.productCategories).toEqual(newProductCategories);
  });
});
