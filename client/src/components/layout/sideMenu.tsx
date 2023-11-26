/*
 * File name: sideMenu.tsx
 * Purpose: Application Main Side Menu
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { Box, Button, Container, Drawer, IconButton, Paper, Typography } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { MainCategory } from 'models/categories';
import styles from './styles';

function SideMenu({
  items,
  isOpen,
  onClose,
  onItemClick,
}: {
  items: MainCategory[];
  isOpen: boolean;
  onClose: () => void;
  onItemClick: (path: String) => void;
}) {
  const { t } = useTranslation();
  return (
    <Container>
      <Drawer open={isOpen} onClose={onClose}>
        <Paper sx={{ height: '100%', p: 2, pr: 4, overflow: 'auto' }}>
          <IconButton onClick={onClose}>
            <CloseOutlined />
          </IconButton>
          <Typography variant="subtitle1" sx={{ pb: 1 }}>
            {t('mainCategories.title')}
          </Typography>
          <Box sx={styles.menuItemsBox}>
            {items.length > 0 &&
              items.map((pc) => (
                <Button
                  variant="text"
                  sx={{ textTransform: 'none' }}
                  onClick={() => {
                    onItemClick(pc.title);
                    onClose();
                  }}
                >
                  <Typography sx={{ pb: 1 }}>{pc.title}</Typography>
                </Button>
              ))}
          </Box>
        </Paper>
      </Drawer>
    </Container>
  );
}

export default SideMenu;
