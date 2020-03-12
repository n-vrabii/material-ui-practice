import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import { Header } from '../Header'

export function Layout(props) {
  const { children, title } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Header title={title} />
      {
        children
      }
    </React.Fragment>
  )
}