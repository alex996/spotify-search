import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Search, Albums } from './pages'
import { ProtectedRoute } from './components'

const App = () => (
  <Router>
    <header>
      <h1 className='title'>Spotify Artist Search</h1>
    </header>
    <main>
      <Switch>
        <Route exact path='/' component={Home} />

        <ProtectedRoute path='/search' component={Search} />

        <ProtectedRoute path='/artists/:name' component={Albums} />
      </Switch>
    </main>
  </Router>
)

export default App
