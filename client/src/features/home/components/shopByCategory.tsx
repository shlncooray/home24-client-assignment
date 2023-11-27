/*
 * File name: shopByCategory.tsx
 * Purpose: Shop by Category card slider
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { Box, Container, IconButton, Typography } from '@mui/material';
import { ArrowCircleRightOutlined, ArrowCircleLeftOutlined } from '@mui/icons-material';
import { SimpleImageCard } from 'components/molecules';
import { productCategories } from 'constants/metaData';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { setMainCategory } from 'store/slices/category.slice';
import styles from '../styles';

function ShopByCategory() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollable, setScrollable] = useState(false);

  const onCategoryClick = (id: string, name: string) => {
    navigate(`/products/${name}`);
    dispatch(setMainCategory({ id, name }));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % productCategories.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + productCategories.length) % productCategories.length,
    );
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleResize = () => {
      const canScroll =
        container?.scrollWidth && container?.clientWidth
          ? container.scrollWidth > container.clientWidth
          : false;
      setScrollable(canScroll);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container sx={{ mt: 3 }} maxWidth={false}>
      {scrollable && (
        <Box sx={styles.shopbByCategoryArrowBox}>
          <Typography variant="subtitle1">{t('shopByCategory')}</Typography>
          <Box>
            <IconButton onClick={handlePrev}>
              <ArrowCircleLeftOutlined fontSize="large" color="primary" />
            </IconButton>
            <IconButton onClick={handleNext}>
              <ArrowCircleRightOutlined fontSize="large" color="primary" />
            </IconButton>
          </Box>
        </Box>
      )}

      <Box ref={containerRef} sx={styles.shopbByCategorySliderBox}>
        <Box sx={styles.shopbByCategorySliderBoxInner(currentSlide)}>
          {productCategories.map((p) => (
            <SimpleImageCard
              key={p.id}
              image={p.imageUrl}
              title={t(`productCategories.${p.title.toLowerCase()}`)}
              onClick={() => onCategoryClick(p.id, p.title)}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default ShopByCategory;
