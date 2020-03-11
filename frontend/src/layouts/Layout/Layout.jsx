import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import { Header } from '../Header'
import { userRoles } from '../../constants'

export function Layout(props) {
  const { children, title, dispatchApp, userRole = userRoles.GUEST } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Header userRole={userRole} dispatchApp={dispatchApp} title={title} />
      {
        children
      }
    </React.Fragment>
  )
}