import React from 'react'
import { Redirect } from 'react-router-dom'

import { Layout } from '../../layouts/Layout'
import { CardsFilter } from '../../components/CardsFilter'
import { strings, userRoles, routes } from '../../constants'

export function Home(props) {

  const { userRole, dispatchApp } = props;

  if (userRole === userRoles.GUEST) {
    return (
      <Redirect to={routes.LOGIN} exact />
    )
  } else {
    return (
      <Layout title={strings.homePageTitle()} dispatchApp={dispatchApp} userRole={userRole}>
        <CardsFilter />
      </Layout>
    )
  }

}