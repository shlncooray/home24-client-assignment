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
import { MainCategory } from 'models/categories';
import styles from './styles';

function SideMenu({
  title,
  items,
  isOpen,
  onClose,
  onItemClick,
}: {
  title: String;
  items: MainCategory[];
  isOpen: boolean;
  onClose: () => void;
  onItemClick: (path: String) => void;
}) {
  return (
    <Container>
      <Drawer open={isOpen} onClose={onClose}>
        <Paper sx={styles.sideMenuPaper}>
          <IconButton onClick={onClose}>
            <CloseOutlined />
          </IconButton>
          <Typography variant="subtitle1" sx={{ pb: 1 }}>
            {title}
          </Typography>
          <Box sx={styles.menuItemsBox}>
            {items.length > 0 &&
              items.map((pc) => (
                <Button
                  key={`${pc.title}-${pc.id}`}
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
