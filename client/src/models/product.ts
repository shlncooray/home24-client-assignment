type ProductRequestArgs = { id: String; locale: String };

type Rating = {
  count: number;
  average: number;
};

type Product = {
  name: string;
  variantName: string;
  sku: string;
  image: string;
  price: number;
  currency: string;
  rating: Rating;
  url?: string;
};

type ProductCategory = {
  name: string;
  urlPath: string;
};

type Articles = {
  images: { path: string }[];
  name: string;
  variantName: string;
  sku: string;
  prices: {
    currency: string;
    regular: {
      value: number;
    };
  };
  ratings: Rating;
};

type CategoryArticle = {
  articles: Articles[];
};

type ChildrenCategories = {
  list: {
    name: string;
    urlPath: string;
  }[];
};

type Category = {
  articleCount: number;
  name: string;
  childrenCategories: ChildrenCategories;
  categoryArticles: CategoryArticle;
};

type ProductListResponse = {
  categories: Category[];
};

type ProductSliceState = {
  product: Product | null;
  products: Product[] | [];
  productCategories: ProductCategory[] | [];
  productResponse: ProductListResponse | null;
};

export type {
  ChildrenCategories,
  Product,
  ProductCategory,
  ProductListResponse,
  ProductRequestArgs,
  ProductSliceState,
};
