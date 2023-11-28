import { Box, Button, Container, Drawer, IconButton, Paper, Typography } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import { MainCategory } from 'models/categories';

const styles = {
  sideMenuPaper: { height: '100%', p: 2, pr: 4, overflow: 'auto' },
  sideMenuItemsBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    ml: 1,
  },
};

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
          <Box sx={styles.sideMenuItemsBox}>
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
