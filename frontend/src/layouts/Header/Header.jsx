import React from 'react'
import { makeStyles, Button, IconButton, AppBar, Typography, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

export function Header(props) {

  const { buttonIsDisplayed } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
  }));

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton aria-label="Menu" className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.title} >Nav Bar Desktop</Typography>

        {buttonIsDisplayed ? <Button color="inherit">Log in</Button> : null}
      </Toolbar>
    </AppBar>
  )
}