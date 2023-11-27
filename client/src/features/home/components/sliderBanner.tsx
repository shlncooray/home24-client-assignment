/*
 * File name: sliderBanner.tsx
 * Purpose: Landing page Image Banner
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { ImageBanner } from 'components/organisms';
import { homePageBanner } from 'constants/metaData';

// #TODO - Make this as a Banner carousel
function SliderBanner() {
  return <ImageBanner banner={homePageBanner} />;
}

export default SliderBanner;
