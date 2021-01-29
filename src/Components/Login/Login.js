import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginForm from './LoginForm';
import styles from './Login.module.css';

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.form}>
        <Switch>
          <Route path="/Login" component={LoginForm} />
        </Switch>
      </div>
    </section>
  )
}

export default Login
