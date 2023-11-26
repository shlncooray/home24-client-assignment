/*
 * File name: styles.tsx
 * Purpose: Layout related all MUI styles
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

const menuItemsBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  ml: 1,
};

const toolBar = { display: 'flex', justifyContent: 'space-between' };
const sideMenuPaper = { height: '100%', p: 2, pr: 4, overflow: 'auto' };

export default { menuItemsBox, toolBar, sideMenuPaper };
