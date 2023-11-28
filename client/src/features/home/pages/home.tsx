import { Container } from '@mui/material';
import { ShopByCategory, ShopByRoom, SliderBanner } from 'features/home';

const styles = {
  homeContainer: { flexDirection: 'row', justifyContent: 'flex-start', margin: 0 },
};

function Home() {
  return (
    <Container disableGutters component="main" maxWidth={false} sx={styles.homeContainer}>
      <SliderBanner />
      <ShopByCategory />
      <ShopByRoom />
    </Container>
  );
}

export default Home;
