import React from 'react';
import { makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  nav: {
    backgroundColor: '#eee',
    color: '#595959',
    [theme.breakpoints.up('lg')]: {
      backgroundColor: '#ccc'
    }
  }
})
);

export function DesktopNav() {

  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <nav className={classes.nav}>
        Nav Bar Desktop
      </nav>
    </Container>
  )
}