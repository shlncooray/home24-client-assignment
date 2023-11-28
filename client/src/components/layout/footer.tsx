import { Box, Typography } from '@mui/material';

const styles = {
  footerOuterBox: { bgcolor: 'background.paper', p: 6 },
};

// #TODO - Extend the AppFooter to have more relaiable content
function AppFooter({ mainLabel, description }: { mainLabel: String; description: String }) {
  return (
    <Box sx={styles.footerOuterBox} component="footer">
      {/** Reading data from a env file - REACT_APP_BRAND_NAME */}
      <Typography variant="h6" align="center" gutterBottom>
        {mainLabel}
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
        {description}
      </Typography>
    </Box>
  );
}

export default AppFooter;
