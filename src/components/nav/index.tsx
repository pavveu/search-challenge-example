import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';
import logo from '../../assets/logo_random.svg';

function Nav() {
  return (
    <AppBar position="static" component="nav">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Link to="/">
            <img src={logo} height="85px" width="200px" alt="logo" />
          </Link>
          <List>
            <ListItem>
              <Link to="/about">
                <ListItemText primary="About" sx={{ float: 'right', color: '#fff' }}>
                  About
                </ListItemText>
              </Link>
            </ListItem>
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
