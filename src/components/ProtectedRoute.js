import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { isLoggedIn } from '../auth'

const ProtectedRoute = ({ component: Component, children, ...props }) => (
  <Route {...props} render={() => {
    if (isLoggedIn()) {
      return Component ? <Component /> : children
    }

    return <Redirect to='/' />
  }} />
)

ProtectedRoute.propTypes = {
  component: PropTypes.elementType,
  children: PropTypes.node
}

export default ProtectedRoute
