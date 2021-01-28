import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={LoginForm} />
      </Switch>
    </div>
  )
}

export default Login
