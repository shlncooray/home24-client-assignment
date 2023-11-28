import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { HomePageBanner } from 'models/metaData';

const styles = {
  ibOuterBox: { maxWidth: '100%', flexGrow: 1 },
  ibImageBox: {
    height: 394,
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
  ibContentBox: { position: 'absolute', top: '10%', left: '5%' },
};

function ImageBanner({ banner }: { banner: HomePageBanner }) {
  const theme = useTheme();
  return (
    <Box sx={styles.ibOuterBox}>
      <Box component="img" sx={styles.ibImageBox} src={banner.imgPath} alt={banner.mainTitle} />
      <Box sx={styles.ibContentBox}>
        <Typography sx={{ mb: 3 }} variant="subtitle2" color={theme.palette.common.white}>
          {banner.topLabel}
        </Typography>
        <Typography sx={{ mb: 2 }} variant="h4" color={theme.palette.common.white}>
          {banner.mainTitle}
        </Typography>
        <Typography sx={{ mb: 10 }} variant="subtitle1" color={theme.palette.common.white}>
          {banner.description}
        </Typography>
        <Button
          sx={{
            backgroundColor: theme.palette.common.white,
            color: theme.palette.common.black,
          }}
        >
          <Typography>{banner.button}</Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default ImageBanner;
