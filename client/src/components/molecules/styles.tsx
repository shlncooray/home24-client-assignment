/*
 * File name: styles.tsx
 * Purpose: Molecules related all MUI styles
 * Created on Sun Nov 24 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

const complexImageCard = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  mr: 2,
};
const complexImageCardMedia = { width: '100%', flex: '1 0 auto', objectFit: 'scale-down' };
const complexImageCardIcon = { position: 'absolute', top: 1, right: 1 };
const complexImageCardContent = { flex: '1 0 auto' };

export default {
  complexImageCard,
  complexImageCardMedia,
  complexImageCardIcon,
  complexImageCardContent,
};
