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
import { Grid, Stack } from '@mui/material';

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
              <Stack spacing={2} direction="row" sx={{ m: 2 }}>
                <Button href='https://poap.xyz/ios' variant="outlined" target="_blank">Apple iOS</Button>
                <Button href='https://poap.xyz/android' variant="outlined" target="_blank">Android</Button>
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