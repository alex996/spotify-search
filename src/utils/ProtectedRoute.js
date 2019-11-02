import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { isLoggedIn } from '../auth'

const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route {...props} render={() => (
    isLoggedIn() ? <Component /> : <Redirect to='/' />
  )} />
)

ProtectedRoute.propTypes = {
  component: PropTypes.elementType
}

export default ProtectedRoute
