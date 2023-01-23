

import * as React from 'react';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks';
import { Navigation } from "../Navigation/Navigation";

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';




function StyledAppBar() {
  const { isLoggedIn } = useAuth();


  return (
    <>
    <AppBar position="static" component="header">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default StyledAppBar;
