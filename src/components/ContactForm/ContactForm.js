import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import React from 'react';

import { Snack } from 'components/Snack/Snack';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Container,
} from '@mui/material';



export default function ContactForm() {


  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const contacts = useSelector(getContacts);
  const [isSnackOpen, setIsSnackOpen] = useState(false);



  const isContactInList = contactName => {
    const lowercaseName = contactName.toLowerCase();
    return contacts.find(({ name }) =>
      name.toLowerCase().includes(lowercaseName)
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);

        break;

      default:
        throw new Error('Not supported type')
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isContactInList(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    setIsSnackOpen(true);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  }


  return (


    <>
      {isSnackOpen && (
        <Snack
          isOpen={isSnackOpen}
          handleClose={() => {
            setIsSnackOpen(false);
          }}
          text="Add Contact"
          type="success"
        />
      )}
      <Container component="section" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonAddRoundedIcon />
          </Avatar>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            {/* <FormControl error> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>

                <TextField
                  type="text"
                  name="name"
                  error={name === ""}
                  id='numberInputId'
                  value={name}
                  label="Name"
                  autoComplete="given-name"
                  required
                  fullWidth
                  onChange={handleChange}
                  helperText={name === "" ? 'Required' : ' '}
                />

              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  name="number"
                  inputProps={{
                    inputMode: 'numeric',
                    pattern: ''
                  }}
                  error={name === ""}
                  id='numberInputId'
                  value={number}
                  autoComplete="tel"
                  onChange={handleChange}
                  required
                  fullWidth
                  label="Phone number"
                  helperText={name === "" ? 'Required' : ' '}
                />
              </Grid>

            </Grid>

            <Button
              type="submit"
              disabled={!name || !number}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Contact
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}



