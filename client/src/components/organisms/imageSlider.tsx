/*
 * File name: imageSlider.tsx
 * Purpose: Image Banner which can be used across application
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import SwipeableViews from 'react-swipeable-views';
// eslint-disable-next-line import/no-extraneous-dependencies
import { autoPlay } from 'react-swipeable-views-utils';
import { Box, Button, Typography } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    topLabel: 'Bis zum 23. November',
    mainTitle: 'This is fantastic!',
    description: 'Bis zum 23. November',
    button: 'Nicht verpassen',
    imgPath:
      'https://images.prismic.io/home24-production/7e3ef0ce-a799-4bc1-b9b0-3017465f8b42_DE_RTT_4176x1182_BM_W4_vp.jpg?auto=compress,format&rect=0,0,4176,1182&w=2784&h=788',
  },
];

function ImageSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.mainTitle}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <Box
                  component="img"
                  sx={{
                    height: 394,
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.mainTitle}
                />
                <Box sx={{ position: 'absolute', top: '10%', left: '5%' }}>
                  <Typography sx={{ mb: 3 }} variant="subtitle2" color={theme.palette.common.white}>
                    {step.topLabel}
                  </Typography>
                  <Typography sx={{ mb: 2 }} variant="h4" color={theme.palette.common.white}>
                    {step.mainTitle}
                  </Typography>
                  <Typography
                    sx={{ mb: 10 }}
                    variant="subtitle1"
                    color={theme.palette.common.white}
                  >
                    {step.description}
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: theme.palette.common.white,
                      color: theme.palette.common.black,
                    }}
                  >
                    <Typography>{step.button}</Typography>
                  </Button>
                </Box>
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default ImageSlider;
