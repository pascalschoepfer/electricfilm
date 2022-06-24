import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '../components/Menu';
import Image from 'next/image';
import childPic from '../public/electricchild.jpg'
import { Stack, Grid } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

const Index = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Menu />
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" sx={{ color: 'black',
            textShadow: '0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 10px #15f4ee, 0 0 15px #15f4ee, 0 0 5px #15f4ee, 0 0 15px #15f4ee, 0 0 15px #15f4ee'}}>
            electric.film
          </Typography>
          <Box sx={{ m:4, overflow:'hidden', borderRadius:'50%', boxShadow: '0 15px 10px 0 #15f4ee inset, 0 5px 10px 0 #15f4ee, 0 5px 10px 0 #15f4ee inset, 0 1px 20px 0 #15f4ee'}}>
            <Image src={childPic}/>
          </Box>
          <Grid container sx={{ justifyContent: 'center' }} spacing={4}>
            <Grid item >
              <Button href='https://discord.gg/e2gRJCQbQW' variant="outlined" target="_blank"
                sx={{
                  borderWidth: 3, borderRadius: 3, textTransform: 'none', "&:hover": {
                    boxShadow: '0 1px 10px 0 #15f4ee inset, 0 1px 10px 0 #15f4ee, 0 1px 10px 0 #15f4ee inset, 0 1px 10px 0 #15f4ee'
                  },
                  width: { xs: '35vw', sm: '20vw', md: '15vw', lg: '10vw', xl: '7vw' }, height: { xs: '7vh', md: '6vh' }
                }}>
                <Typography>Discord</Typography>
                <SvgIcon sx={{ ml: 1 }}>
                  <path fill="currentColor" d="M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z" />
                </SvgIcon>
              </Button>
            </Grid>
            <Grid item >
              <Button href='https://twitter.com/el3ctricfilm' variant="outlined" target="_blank"
                sx={{
                  borderWidth: 3, borderRadius: 3, textTransform: 'none', "&:hover": {
                    boxShadow: '0 1px 10px 0 #15f4ee inset, 0 1px 10px 0 #15f4ee, 0 1px 10px 0 #15f4ee inset, 0 1px 10px 0 #15f4ee'
                  },
                  width: { xs: '35vw', sm: '20vw', md: '15vw', lg: '10vw', xl: '7vw' }, height: { xs: '7vh', md: '6vh' }
                }}>
                <Typography>Twitter</Typography>
                <SvgIcon sx={{ ml: 1 }}>
                  <path fill="currentColor" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                </SvgIcon>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Index;