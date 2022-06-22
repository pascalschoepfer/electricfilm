import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '../components/Menu';

const FAQ = ()  => {
  return (
    <div>
    <Container maxWidth="sm">
      <Menu />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Here comes the FAQ
        </Typography>
      </Box>
    </Container>
    </div>
  );
}

export default FAQ;