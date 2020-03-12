import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'

import { Layout } from '../../layouts/Layout'
import { CardsFilter } from '../../components/CardsFilter'
import { CardsGrid } from '../../components/CardsGrid'
import { strings, userRoles, routes } from '../../constants'
import { AuthContext } from '../../App'

export function Home() {

  const { userRole } = useContext(AuthContext);

  if (userRole === userRoles.GUEST) {
    return (
      <Redirect to={routes.LOGIN} exact />
    )
  } else {
    return (
      <Layout title={strings.homePageTitle()} >
        <CardsFilter />
        <CardsGrid />
      </Layout>
    )
  }
}