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
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography variant='h6'>What is a POAP? </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A special kind of NFT to everyone who participated in a special event. These NFTs are called POAPs.
                POAPs are digital mementos, minted in celebration of lifes remarkable moments.<br/><br/>
                Each POAP is a gift from an issuer (electric.film) to collectors (YOU), in celebration of a special shared memory.
                By minting these memories to the blockchain, collectors build a rich tapestry of tokenized experiences which unlock a world of possibilities.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography variant='h6'>What is electric.film?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Electric.film is a transformation project into the web3 space that runs in parallel with the Electric Child film production.
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
                Electric.film is a decentralized community open to everyone who is interested in the future around web3 and the film production of tomorrow.<br/><br/>
                Electric.film is the early contributors on Discord.<br/><br/>
                Electric.film is everyone working on the Electric Child movie.<br/><br/>
                The core members consist of a mixed group, slightly smaller than a dozen.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography variant='h6'>What can I do with my POAP?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                POAPs will keep you connected with electric.film and enable you to vote or access future drops and releases.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
              <Typography variant='h6'>How can I set up my own wallet and generate an Ethereum address?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              We recommend using <Link href='https://metamask.io/' target="_blank">Metamask</Link> or <Link href='https://www.myetherwallet.com/' target="_blank">MyEtherWallet</Link> as your first Ethereum wallet. 
              Never share your private key with anyone. Not your keys, not your coins or POAPs!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
              <Typography variant='h6'>How Do I Mint a POAP Ive Claimed/Reserved with an Email Address?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Please visit the excellent <Link href='https://help.poap.xyz/en/articles/5790609-how-do-i-mint-a-poap-i-ve-claimed-reserved-with-an-email-address' target="_blank">POAP documentation</Link> for this.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary aria-controls="panel6d-content" id="panel7d-header">
              <Typography variant='h6'>Roadmap?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              At the point of writing, we are still in the concept phase and prepare the pre-launch of electric.film. <br/><br/>
              Simultaneously the film shooting of Electric Child is taking place. <br/><br/>
              Stay tuned for whats to come. 
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </div>
  );
}

export default POAP;