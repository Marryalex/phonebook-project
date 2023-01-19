import css from './Home.module.css'
import { Box, Typography, Link } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


export default function Home() {
    return (
      <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(90deg, #C7C5F4, #776BCC)`,
          height: '100vh',
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
										{/* <h1>PHONE</h1>
										<p>BOOK</p> */}
									</div>
								</li>
								<li></li>
							</ul>


							<ul className={css.page}>
								<li></li>
								<li>
									<button className={css.btn}>Register</button>
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
              <Typography variant="h5" component="p" sx={{ color: 'white' }}>PhoneBook app is an easy to use contact manager app that gives you facility of saving and viewing your contacts, so that you never lose your contacts.</Typography>
								</figcaption>
						</figure>
					</li>
				</ul>
			</div>
</Box>
      </>
    );
  }