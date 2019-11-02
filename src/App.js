import React from 'react'
import { Login, Search } from './components'

const FullScreen = ({ children }) => (
  <div className='fullscreen'>
    {children}
  </div>
)

const App = () => {
  const [, query] = window.location.hash.split('#')
  const accessToken = new URLSearchParams(query).get('access_token')

  if (!accessToken) {
    return <FullScreen>
      <Login />
    </FullScreen>
  }

  const tokenInStorage = localStorage.getItem('access_token')
  if (!tokenInStorage || tokenInStorage !== accessToken) {
    localStorage.setItem('access_token', accessToken)
  }

  return <>
    <FullScreen>
      <Search />
    </FullScreen>
  </>
}

export default App
