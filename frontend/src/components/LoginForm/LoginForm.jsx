import React from 'react';

import { useForm } from './useForm';
import { makeStyles } from '@material-ui/core/styles'

import { Button, Grid, Paper, FormControl, TextField } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'block',
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    borderRadius: '8px',
    margin: `${theme.spacing(5)}px auto 0px auto`,
    maxWidth: '420px',
  },
  buttonWrapper: {
    marginTop: theme.spacing(4)
  },
  cancelButton: {
    marginLeft: theme.spacing(2)
  }
}));

export function LoginForm() {

  const classes = useStyle();

  const initialState = {
    firstName: '',
    secondName: '',
    email: '',
    buttonIsDisabled: true
  }

  const [state, dispatch] = useForm(initialState);

  return (
    <Paper className={classes.root}>
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
    </Paper >
  )
}