/*
 * File name: categories.ts
 * Purpose: Categories Cart related interfaces/types
 * Created on Sun Nov 23 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

interface CategorySliceState {
  mainCategory: {
    name: string;
    id: string;
  } | null;
}
interface MainCategory {
  title: string;
  imageUrl: string;
  id: string;
}

interface RoomCategory {
  title: string;
  imageUrl: string;
  id: string;
}

export type { CategorySliceState, MainCategory, RoomCategory };
