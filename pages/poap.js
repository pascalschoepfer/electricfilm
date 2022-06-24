import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '../components/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'next/image';
import mailPic from '../public/mail.jpg'
import mintPic from '../public/mint.jpg'
import wordPic from '../public/word.jpg'
import { Stack } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`, '&:not(:last-child)': { borderBottom: 0, },
    '&:before': { display: 'none', },
  }));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}{...props} />))(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse', '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': { transform: 'rotate(90deg)', },
    '& .MuiAccordionSummary-content': { marginLeft: theme.spacing(1), },
  }));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const POAP = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Menu />
        <Box sx={{ my: 4 }}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography variant='h6'>1. Get POAP mobile app</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Download the POAP app for you mobile device:
              </Typography>
              <Stack spacing={1} direction="row" sx={{ my: 1 }}>
                <Button href='https://poap.xyz/ios' variant="outlined" target="_blank"
                  sx={{
                    borderWidth: 3, borderRadius: 3, textTransform: 'none', "&:hover": {
                      boxShadow: '0 1px 10px 0 #15f4ee inset, 0 1px 10px 0 #15f4ee, 0 1px 10px 0 #15f4ee inset, 0 1px 10px 0 #15f4ee'
                    },
                    width: { xs: '45vw', sm: '25vw', md: '16vw', lg: '13vw', xl: '9vw' }, height: { xs: '7vh', md: '6vh' }
                  }}>
                  <Typography>Apple iOS</Typography>
                  <SvgIcon sx={{ ml: 1, mb: 1 }}>
                  <path fill="currentColor" d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />                  </SvgIcon>
                </Button>
                <Button href='https://poap.xyz/android' variant="outlined" target="_blank"
                  sx={{
                    borderWidth: 3, borderRadius: 3, textTransform: 'none', "&:hover": {
                      boxShadow: '0 1px 10px 0 #15f4ee inset, 0 1px 10px 0 #15f4ee, 0 1px 10px 0 #15f4ee inset, 0 1px 10px 0 #15f4ee'
                    },
                    width: { xs: '45vw', sm: '25vw', md: '16vw', lg: '13vw', xl: '9vw' }, height: { xs: '7vh', md: '6vh' }
                  }}>
                  <Typography>Android</Typography>
                  <SvgIcon sx={{ ml: 1 }}>
                  <path fill="currentColor" d="M16.61 15.15C16.15 15.15 15.77 14.78 15.77 14.32S16.15 13.5 16.61 13.5H16.61C17.07 13.5 17.45 13.86 17.45 14.32C17.45 14.78 17.07 15.15 16.61 15.15M7.41 15.15C6.95 15.15 6.57 14.78 6.57 14.32C6.57 13.86 6.95 13.5 7.41 13.5H7.41C7.87 13.5 8.24 13.86 8.24 14.32C8.24 14.78 7.87 15.15 7.41 15.15M16.91 10.14L18.58 7.26C18.67 7.09 18.61 6.88 18.45 6.79C18.28 6.69 18.07 6.75 18 6.92L16.29 9.83C14.95 9.22 13.5 8.9 12 8.91C10.47 8.91 9 9.24 7.73 9.82L6.04 6.91C5.95 6.74 5.74 6.68 5.57 6.78C5.4 6.87 5.35 7.08 5.44 7.25L7.1 10.13C4.25 11.69 2.29 14.58 2 18H22C21.72 14.59 19.77 11.7 16.91 10.14H16.91Z" />                  </SvgIcon>
                </Button>
              </Stack>

            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography variant='h6'>2. Connect to the POAP app</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                After downloading and starting the POAP app, connect the app to your email address.<br />
                <i>(Pro-Tip: If you already have an Ethereum crypto wallet, you can use its public address or ENS domain to log in!)</i>
              </Typography>
              <Box sx={{ mt: 2, maxWidth: .7 }}>
                <Image src={mailPic} />
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography variant='h6'>3. Mint (Claim) POAP with secret code</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Now you are ready to claim <b>your personal POAP</b>. Use the secret word, which was handed out to you by the electric.film team.<br /><br />
                When logged in into the POAP app, click on <i><b>Mint</b></i>, then click <i><b>Secret Word</b></i>, fill it and submit with the <i><b>Mint</b></i> button.
              </Typography>
              <Box sx={{ mt: 2, maxWidth: .9 }}>
                <Image src={mintPic} />
              </Box>
              <Box sx={{ mt: 2, maxWidth: .9 }}>
                <Image src={wordPic} />
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography variant='h6'>4. Celebrate</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Congratulations, you are a part of electric.film!<br /><br />
                You now own a specific and personal POAP <i>(Which is an NFT - Non-Fungible Token)</i> that can only be collected as a reward for participating in a special event. <br /><br />
                Stay tuned, as the electric.film POAPs enable you to vote or access future drops and releases.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </div>
  );
}

export default POAP;