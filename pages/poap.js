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
              <Button href='https://poap.xyz/ios' variant="outlined" target="_blank">Apple iOS</Button>
              <Button href='https://poap.xyz/android' variant="outlined" target="_blank">Android</Button>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography variant='h6'>2. Log in to the POAP app</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                After downloading and starting the POAP app, log in with your email address.<i>(Or, if you already have a crypto wallet, you can use its public address to log in!)</i>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography variant='h6'>3. Mint POAP with secret code</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Now you need the secret code which will be handed out at the events by the electric.film team.<br />
                When logged in into the POAP app, click on <i><b>Mint</b></i>, then click <i><b>Secret Word</b></i>, fill it and submit with the <i><b>Mint</b></i> button.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </div>
  );
}

export default POAP;