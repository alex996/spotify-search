import React from 'react'
import { loginUrl } from '../config'
import icon from '../icons/spotify.png'

const Login = () => (
  <a className='box login' href={loginUrl}>
    <span>Login</span>
    <img src={icon} alt='Spotify' draggable={false} />
  </a>
)

export default Login
