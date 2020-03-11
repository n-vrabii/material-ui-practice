import React from 'react';
import { LoginForm } from '../../components/LoginForm';
import { Layout } from '../../layouts/Layout';

function Landing() {
  return (
    <Layout isLoginPage={true}>
      <LoginForm />
    </Layout>
  );
}

export default Landing;
