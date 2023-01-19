
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';


export const AuthNav = () => {
  const navigate = useNavigate();

  const [tabValue, settabValue] = useState('login');

  const handleTabChange = (_, newValue) => {
    settabValue(newValue);
  };

  const handleNavigateRegister = () => {
    navigate('/register');
  };

  const handleNavigateLogin = () => {
    navigate('/login');
  };
  return (
<>
      <Box sx={{ flexGrow: 0 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="inherit"
          aria-label="Auth tabs"
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          <Tab
            value="register"
            label="Sign up"
            onClick={handleNavigateRegister}
            sx={{ my: 2, color: 'white', display: 'block' }}
          />

          <Tab
            value="login"
            label="Log in"
            onClick={handleNavigateLogin}
            sx={{ my: 2, color: 'white', display: 'block' }}
          />
        </Tabs>
      </Box>
    </> 
  )
};