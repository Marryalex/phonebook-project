import css from './Home.module.css'
import { Box, Typography, Link } from '@mui/material';

import { useNavigate } from 'react-router-dom/dist';


export default function Home() {
  const navigate = useNavigate();
  const handleNavigateToRegister = () => {
    navigate('/register');
  };
    return (
      <>
      <Box
        sx={{
          // backgroundImage: `linear-gradient(90deg, #C7C5F4, #776BCC)`,
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div className={css.component}>
				<ul className={css.align}>
					<li>
						<figure className={css.book}>

							<ul className={css.hardcover_front}>
								<li>
									<div className={css.coverDesign_blue}>
                  <Typography variant="h5" component="p" sx={{ color: 'white' }}>PHONE</Typography>
                  <Typography variant="h5" component="p" sx={{ color: 'white' }}>BOOK</Typography>
									</div>
								</li>
								<li></li>
							</ul>


							<ul className={css.page}>
								<li></li>
								<li>
                <div className={css.btn}>
                <Link
                  onClick={handleNavigateToRegister}
                    href="#"
                    underline="hover">
                    Register
                    </Link>

                    </div>

								</li>
								<li></li>
								<li></li>
								<li></li>
							</ul>


							<ul className={css.hardcover_back}>
								<li></li>
								<li></li>
							</ul>
							<ul className={css.book_spine}>
								<li></li>
								<li></li>
							</ul>
              <figcaption>
              <Typography variant="h5" component="p" >PhoneBook app is an easy to use contact manager app that gives you facility of saving and viewing your contacts, so that you never lose your contacts.</Typography>
								</figcaption>
						</figure>
					</li>
				</ul>
			</div>
</Box>
      </>
    );
  }