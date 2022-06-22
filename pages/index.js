import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '../components/Menu';

const Index = ()  => {
  return (
    <div>
    <Container maxWidth="sm">
      <Menu />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hi from electric.film
        </Typography>
        <Button href='https://discord.gg/4pJuKqrp' variant="outlined" target="_blank">Join our Discord</Button>
        <Button href='https://twitter.com/el3ctricfilm' variant="outlined" target="_blank">Follow us on Twitter</Button>
      </Box>
    </Container>
    </div>
  );
}

export default Index;