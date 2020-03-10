import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'

import { Hidden } from '@material-ui/core';

import { DesktopNav } from '../../components/Nav/DesktopNav/DesktopNav';
import { MobileNav } from '../../components/Nav/MobileNav/MobileNav';

export function Layout(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Hidden smDown>
        <DesktopNav />
      </Hidden>
      <Hidden mdUp>
        <MobileNav />
      </Hidden>
      {
        props.children
      }
    </React.Fragment>
  )
}