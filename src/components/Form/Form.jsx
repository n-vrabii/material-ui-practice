import React, { useReducer } from 'react';

import { makeStyles } from '@material-ui/core/styles'

import { Button, Grid, Input, Container } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  formContainer: {
    padding: '32px 16px',
    border: '2px solid #eee',
    marginTop: 40,
    maxWidth: '420px',
  },
  buttonWrapper: {
    marginTop: 32
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

  const [state, dispatch] = useReducer((state, action) => {

    switch (action.type) {
      case "firstName":
        return { ...state, firstName: action.value, buttonIsDisabled: !(action.value && state.secondName && state.email) }
      case "secondName":
        return { ...state, secondName: action.value, buttonIsDisabled: !(state.firstName && action.value && state.email) }
      case "email":
        return { ...state, email: action.value, buttonIsDisabled: !(state.firstName && state.secondName && action.value) }
      default:
        return state
    }
  }, initialState);

  function handleInput(e, actionType) {
    dispatch({ type: actionType, value: e.target.value })
  }

  function handleFormSubmit(e) {
    alert(JSON.stringify(state));
  }

  return (
    <Container className={classes.formContainer}>
      <Grid container
        spacing={2}
      >
        <Grid item xs={6}>
          <Input type="text" placeholder="First Name" onInput={(e) => handleInput(e, "firstName")}></Input>
        </Grid>

        <Grid item xs={6}>
          <Input type="text" placeholder="Second Name" onInput={(e) => handleInput(e, "secondName")}></Input>
        </Grid>

        <Grid item xs={6}>
          <Input type="text" placeholder="Email" onInput={(e) => handleInput(e, "email")}></Input>
        </Grid>

        <Grid className={classes.buttonWrapper} item xs={12}>
          <Button
            variant="contained"
            color="primary"
            disabled={state.buttonIsDisabled}
            onClick={state.buttonIsDisabled ? null : handleFormSubmit}>
            Submit
        </Button>
        </Grid>
      </Grid>
    </Container>

  )
}