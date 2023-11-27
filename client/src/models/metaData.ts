/*
 * File name: metaData.ts
 * Purpose: Metadata related interfaces/types
 * Created on Sun Nov 22 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

interface Language {
  value: string;
  label: string;
}

interface HomePageBanner {
  topLabel: string;
  mainTitle: string;
  description: string;
  button: string;
  imgPath: string;
}

export type { Language, HomePageBanner };
