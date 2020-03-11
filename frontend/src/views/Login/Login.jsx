import React from 'react';
import { Redirect } from 'react-router-dom';

import { LoginForm } from '../../components/LoginForm';
import { Layout } from '../../layouts/Layout';
import { strings, userRoles, routes } from '../../constants';

export function Login(props) {
  const { userRole, dispatchApp } = props;

  if (userRole === userRoles.GUEST) {
    return (
      <Layout userRole={userRole} dispatchApp={dispatchApp} title={strings.loginPageTitle()}>
        <LoginForm dispatchApp={dispatchApp} />
      </Layout>
    );
  } else {
    return (
      <Redirect to={routes.HOME} exact />
    )
  }
}
