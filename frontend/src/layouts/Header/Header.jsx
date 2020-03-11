import React from 'react'
import { makeStyles, Button, AppBar, Typography, Toolbar } from '@material-ui/core'

import { userRoles } from '../../constants';

export function Header(props) {

  const { userRole, dispatchApp, title = null } = props;

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
        <Typography variant="h6" color="inherit" className={classes.title} >{title}</Typography>

        {userRole !== userRoles.GUEST ?
          (<Button
            color="inherit"
            onClick={() => dispatchApp({ type: "userRole", value: userRoles.GUEST })}>
            Log out
          </Button>) : null}
      </Toolbar>
    </AppBar>
  )
}