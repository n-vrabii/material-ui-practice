import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { LoginForm } from '../../components/LoginForm';
import { Layout } from '../../layouts/Layout';
import { strings, userRoles, routes } from '../../constants';
import { AuthContext } from '../../App';

export function Login() {
  const { userRole } = useContext(AuthContext);

  if (userRole === userRoles.GUEST) {
    return (
      <Layout title={strings.loginPageTitle()}>
        <LoginForm />
      </Layout>
    );
  } else {
    return (
      <Redirect to={routes.HOME} exact />
    )
  }
}
