import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Menu from '../components/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

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
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Menu />
        <Box sx={{ my: 4 }}>
        
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography variant='h6'>What is electric.film?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              	Electric.film is a transformation project for 8horses, a traditional film production studio, leading 8horses into to the Web3 space.<br/><br/>
                Our vision for electric.film is to become a decentralized and democratic film studio with its own proprietary streaming platform. 
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography variant='h6'>Who is electric.film?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <b>YOU</b> are electric.film!<br/><br/>
                Electric.film is a decentralized community, open to anyone who is interested in the future of Web3 and film production.            
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography variant='h6'>What is a POAP? </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              A POAP (pronounced poh-ap, not pope / short for Proof Of Attendance Protocol) is a special kind of NFT, accessible to everyone who participated in a certain event.
              These NFTs are called POAPs. <br/><br/>
              POAPs are digital mementos, minted in celebration of life's remarkable moments.
              Each POAP is a gift from an issuer (electric.film) to collectors (YOU), in celebration of a special shared memory.<br/><br/>
              By minting these memories to the blockchain, collectors can build a rich tapestry of tokenized experiences, which unlock a world of possibilities.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography variant='h6'>What can I do with my POAP?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                POAPs will keep you connected with electric.film and enable you to vote or access future drops and releases. <br/><br/> 
                You probably don`t want to miss that!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
              <Typography variant='h6'>How do I mint a POAP I have claimed/reserved with an email address?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Please visit the excellent <Link href='https://help.poap.xyz/en/articles/5790609-how-do-i-mint-a-poap-i-ve-claimed-reserved-with-an-email-address' target="_blank">POAP documentation</Link> for this.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
              <Typography variant='h6'>How can I set up my own wallet and generate an Ethereum address?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              We recommend using <Link href='https://metamask.io/download/' target="_blank">Metamask</Link> or <Link href='https://www.mewwallet.com/' target="_blank">MyEtherWallet</Link> as your first Ethereum wallet. 
              Never share your private key with anyone. Not your keys, not your coins or POAPs!
              </Typography>
            </AccordionDetails>
          </Accordion>
        
          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary aria-controls="panel6d-content" id="panel7d-header">
              <Typography variant='h6'>Roadmap?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Currently, we are still in the concept-phase and are preparing the pre-launch of electric.film. <br/><br/>
              Simultaneously, the Electric Child movie is being shot. <br/><br/>
              Stay tuned for what's to come! :-)
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </div>
  );
}

export default POAP;