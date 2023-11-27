type Category = {
  name: string;
  id: string;
};

type CategorySliceState = {
  mainCategory: Category | null;
};

type MainCategory = {
  title: string;
  imageUrl: string;
  id: string;
};

type RoomCategory = {
  title: string;
  imageUrl: string;
  id: string;
};

export type { Category, CategorySliceState, MainCategory, RoomCategory };
