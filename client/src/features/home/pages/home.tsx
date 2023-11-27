import { Container } from '@mui/material';
import { ShopByCategory, ShopByRoom, SliderBanner } from 'features/home';

function Home() {
  return (
    <Container
      disableGutters
      component="main"
      maxWidth={false}
      sx={{ flexDirection: 'row', justifyContent: 'flex-start', margin: 0 }}
    >
      <SliderBanner />
      <ShopByCategory />
      <ShopByRoom />
    </Container>
  );
}

export default Home;
