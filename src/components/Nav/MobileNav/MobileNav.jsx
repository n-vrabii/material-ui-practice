import React from 'react';
import { makeStyles, Container, Box } from '@material-ui/core';

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
    <Box className={classes.nav}>
      <Container>
        Nav Bar Mobile
      </Container>
    </Box>
  )
}