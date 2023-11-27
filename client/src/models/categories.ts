/*
 * File name: categories.ts
 * Purpose: Categories Cart related interfaces/types
 * Created on Sun Nov 23 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

type CategorySliceState = {
  mainCategory: {
    name: string;
    id: string;
  } | null;
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

export type { CategorySliceState, MainCategory, RoomCategory };
