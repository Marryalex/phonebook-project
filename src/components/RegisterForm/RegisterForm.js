import { useDispatch, useSelector} from 'react-redux';
import { register } from 'redux/auth/operations';
import './Register.css'
import { useNavigate } from 'react-router-dom/dist';

import {selectError} from 'redux/auth/selectors';
import {selectIsLoading} from 'redux/auth/selectors';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { Snack } from '../Snack/Snack';

import {
  Box,
  Grid,
  Link,
  TextField,
  Avatar,
  CircularProgress,
} from '@mui/material';

import { useState } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [brokenTextField, setBrokenTextField] = useState(false);

  const isError = useSelector(selectError);

  const isLoading = useSelector(selectIsLoading);


  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

      const formData = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

    if (!formData.name || !formData.email || !formData.password) {
      setBrokenTextField(true);
      return;
    }
    dispatch(register(formData))
    form.reset();
  };

  const handleNavigateToLogin = () => {
    navigate('/login');
  };
  return (
<>
{brokenTextField && (
        <Snack type="error" text="Fill in all fields, please" />
      )}

      {isError && <Snack type="error" text="Something went wrong :(" />}
      {isLoading ? (
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
      ) : (
<div className='container'>

	<div className='screen'>
		<div className='screen__content'>
    <Box
            sx={{
              marginTop: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
			<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            </Box>
      <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
            >
            <div className='login'>
<div className='login__field'>
                <Grid >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="User name"
                    name="name"
                    autoFocus
                    autoComplete="off"
                  />
                </Grid>
                </div>
                <div className='login__field'>
                <Grid>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                </div>
                <div className='login__field'>
                <Grid >
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                  
</div>



				<button className='button login__submit'>
					<span className='button__text'>Sign up</span>
				</button>
        <Link
                    
                    color='rgba(255, 255, 0, 0,87)'
                    onClick={handleNavigateToLogin}
                    href="#"
                    underline="hover"
                  >
                  Already have an account? Sign in

                  </Link>				
			</div>
   </Box>
			<div className='social-login'>
				<h3>Or Sign Up Using</h3>
				<div className="social-icons">
        <div className="social-login__icon">
        <Link href="#" className="social-login__icon">
        <InstagramIcon/>
          </Link>
          </div>
					<div className="social-login__icon ">
          <Link href="#" className="social-login__icon">
          <FacebookIcon/>
          </Link></div>
					<div className="social-login__icon">
          <Link href="#" className="social-login__icon">
          <TwitterIcon/>
          </Link></div>
					
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
   
</div>
)} 
     </>   
  );
};
