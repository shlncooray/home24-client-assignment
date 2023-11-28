import { Box, Container, Typography } from '@mui/material';
import { SimpleImageCard } from 'components/molecules';
import { ROOM_CATEGORIES } from 'constants/metaData';
import { useTranslation } from 'react-i18next';

const styles = {
  shopByRoomBox: { display: 'flex', mt: 1 },
};

// #TODO - Shop by Room is just a place holder category thinking about adding somethins similar to 'ShopByCategory'
function ShopByRoom() {
  const { t } = useTranslation();
  return (
    <Container sx={{ mt: 3 }} maxWidth={false}>
      <Typography variant="subtitle1">{t('shopByRoom')}</Typography>
      <Box sx={styles.shopByRoomBox}>
        {ROOM_CATEGORIES.map((p) => (
          <SimpleImageCard key={p.id} image={p.imageUrl} title={p.title} />
        ))}
      </Box>
    </Container>
  );
}

export default ShopByRoom;
