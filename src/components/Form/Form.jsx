import React from 'react';

import { useForm } from './useForm';
import { makeStyles } from '@material-ui/core/styles'

import { Button, Grid, Container, FormControl, TextField } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  formContainer: {
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    border: '2px solid #eee',
    borderRadius: '8px',
    marginTop: theme.spacing(5),
    maxWidth: '420px',
  },
  buttonWrapper: {
    marginTop: theme.spacing(4)
  },
  cancelButton: {
    marginLeft: theme.spacing(2)
  }
}));

export function Form() {

  const classes = useStyle();

  const initialState = {
    firstName: '',
    secondName: '',
    email: '',
    buttonIsDisabled: true
  }

  const [state, dispatch] = useForm(initialState);

  return (
    <Container className={classes.formContainer}>
      <FormControl >
        <Grid container
          spacing={2}
        >
          <Grid item xs={6}>
            <TextField
              type="text"
              label="First Name"
              value={state.firstName}
              onInput={(e) => dispatch({ value: e.target.value, type: "firstName" })}
            >
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField
              type="text"
              label="Second Name"
              value={state.secondName}
              onInput={(e) => dispatch({ value: e.target.value, type: "secondName" })}></TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField
              type="text"
              label="Email"
              value={state.email}
              onInput={(e) => dispatch({ value: e.target.value, type: "email" })}></TextField>
          </Grid>

          <Grid className={classes.buttonWrapper} item xs={12}>

            <Button
              variant="contained"
              color="primary"
              disabled={state.buttonIsDisabled}
              href={state.buttonIsDisabled ? null : "/quiz"}>
              Submit
                </Button>


            <Button
              className={classes.cancelButton}
              color="secondary"
              onClick={() => dispatch({ type: "reset" })}>
              Clear
        </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Container >
  )
}