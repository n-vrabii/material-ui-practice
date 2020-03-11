import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'

import { Header } from '../Header';

export function Layout(props) {
  const { children, isLoginPage = false } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Header buttonIsDisplayed={!isLoginPage} />
      {
        children
      }
    </React.Fragment>
  )
}