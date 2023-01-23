import { Outlet } from 'react-router-dom';
import StyledAppBar from './AppBar/AppBar';
import { Suspense } from 'react';
import Footer from './Footer/Footer';

import {
  CircularProgress,
  Box,
} from '@mui/material';

export const Layout = () => {
  return (
    <>
      <StyledAppBar />
      <Suspense
        fallback={
          <Box sx={{ width: '100vw', height: '100vh', position: 'relative' }}>
            <CircularProgress
              sx={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </Box>
        }
      >
        <Outlet />
       
      </Suspense>
       <Footer />
    </>
  );
};