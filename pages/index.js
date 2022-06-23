import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '../components/Menu';
import Image from 'next/image';
import childPic from '../public/electricchild.jpg'
import { Grid } from '@mui/material';

const Index = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Menu />
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="h3" component="h1">
            electric.film
          </Typography>
          <Box sx={{ m: 2 }}>
            <Image src={childPic} />
          </Box>
          <Grid container sx={{ justifyContent: 'center' }} spacing={2} >
            <Grid item width={.4}>
              <Button href='https://discord.gg/e2gRJCQbQW' variant="outlined" target="_blank">Join our Discord</Button>
            </Grid>
            <Grid item width={.4}>
              <Button href='https://twitter.com/el3ctricfilm' variant="outlined" target="_blank">Follow on Twitter</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Index;