import React from 'react';

import { Layout } from '../../layouts/Layout/Layout';
import { Icon, Button, Container } from '@material-ui/core';

export default function Quiz() {

  return (
    <Layout>
      <Container>
        <Button startIcon={<Icon>arrow_back</Icon>} href="/">Back</Button>
      </Container>
    </Layout>
  )
}