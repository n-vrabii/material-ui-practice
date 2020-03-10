import React from 'react';
import { makeStyles, Container, Box } from '@material-ui/core';

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
    <Box className={classes.nav}>
      <Container maxWidth="md">
        Nav Bar Desktop
      </Container>
    </Box>
  )
}