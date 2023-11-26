/*
 * File name: styles.tsx
 * Purpose: Home page/components related MUI styles
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

const shopbByCategoryArrowBox = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  mb: 1,
};
const shopbByCategorySliderBox = { display: 'flex', overflow: 'hidden', position: 'relative' };
const shopbByCategorySliderBoxInner = (currentSlide: number) => {
  return {
    pt: 1,
    pb: 1,
    display: 'flex',
    transition: 'transform 0.5s',
    transform: `translateX(-${currentSlide * 80}%)`,
  };
};

export default { shopbByCategoryArrowBox, shopbByCategorySliderBox, shopbByCategorySliderBoxInner };
