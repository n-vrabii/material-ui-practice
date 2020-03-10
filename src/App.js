import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import { Form } from './components/Form/Form';
import { Hidden } from '@material-ui/core';

import { DesktopNav } from './components/Nav/DesktopNav/DesktopNav';
import { MobileNav } from './components/Nav/MobileNav/MobileNav';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Hidden smDown>
        <DesktopNav />
      </Hidden>
      <Hidden mdUp>
        <MobileNav />
      </Hidden>
      <Form />
    </React.Fragment>

  );
}

export default App;
