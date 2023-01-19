import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/operations';
import {selectIsLoading, selectError } from '../../redux/auth/selectors'
import '../RegisterForm/Register.css'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { Snack } from '../Snack/Snack'
import {
  Box,
  Grid,
  Link,
  TextField,
  Avatar,
  CircularProgress,
} from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const isError = useSelector(selectError);

  const isLoading = useSelector(selectIsLoading);
  const [brokenTextField, setBrokenTextField] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (!formData.email || !formData.password){
      setBrokenTextField(true);
      return;
    };

    dispatch(logIn(formData));
    form.reset();
  };

  return (

<>
{brokenTextField && (
        <Snack type="error" text="Fill in all fields, please" />
      )}

      {isError && <Snack type="error" text="Incorrect login or password" />}
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
					<span className='button__text'>Log in</span>
				</button>

        </div>
        </Box>
			<div className='social-login'>
				<h3>Or Log in Using</h3>
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
