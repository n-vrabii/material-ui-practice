import React from 'react';

import { Layout } from '../../layouts/Layout';
import { makeStyles, Icon, Button, Container, Typography } from '@material-ui/core';


export default function Quiz() {

  const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: theme.spacing(5),
    }
  }));

  const classes = useStyles();

  return (
    <Layout>
      <Container className={classes.root}>
        <Button startIcon={<Icon>arrow_back</Icon>} href="/">Back</Button>

        <Typography variant="h5">
          Hello, there. This is a h5 Typography variant.
        </Typography>

        <Typography variant="body1">
          Hello, there. This is a body1 Typography variant.
        </Typography>

        <Typography variant="h6">
          Hello, there. This is a h6 Typography variant.
        </Typography>

        <Typography variant="body2">
          Hello, there. This is a body2 Typography variant.
        </Typography>

      </Container>
    </Layout>
  )
}