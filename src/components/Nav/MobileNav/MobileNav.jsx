import React from 'react';
import { makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  nav: {
    backgroundColor: '#eee',
    color: '#595959'
  }
})
);

export function MobileNav() {

  const classes = useStyles();

  return (
    <Container>
      <nav className={classes.nav}>
        Nav Bar Mobile
    </nav>
    </Container>
  )
}