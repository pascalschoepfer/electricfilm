import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { NextLinkComposed } from '../src/Link';
import { useRouter } from 'next/router';

const Menu = () => {
    const [value, setValue] = React.useState(useRouter().pathname);

    const handleChange = (event, newValue) => {setValue(newValue);};
  
    return (
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value} onChange={handleChange} textColor="primary" indicatorColor="primary" centered
        >
          <Tab value="/" label="Home"  component={NextLinkComposed} to={{pathname: '/'}}/>
          <Tab value="/poap" label="POAP"  component={NextLinkComposed} to={{pathname: '/poap'}}/>
          <Tab value="/faq" label="FAQ" component={NextLinkComposed} to={{pathname: '/faq'}}/>
        </Tabs>
      </Box>
    );
}

export default Menu;