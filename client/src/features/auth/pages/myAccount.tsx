import { Container, Typography } from '@mui/material';

function MyAccount() {
  return (
    <Container
      disableGutters
      component="main"
      maxWidth={false}
      sx={{ flexDirection: 'row', justifyContent: 'flex-start', margin: 0 }}
    >
      <Typography>This is a Protected Page</Typography>
    </Container>
  );
}

export default MyAccount;
