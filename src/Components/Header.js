import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import Logo from '../Assets/logoHeader.png';
import {UserContext} from '../UserContext'


const Header = () => {
  const usuario = React.useContext(UserContext);  
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Home">
          <img src={Logo} alt="Logo"/>
        </Link>
        <Link className={styles.login} to="/Login">Sair</Link>
      </nav>
    </header>
  )
}

export default Header
