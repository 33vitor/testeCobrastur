import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logoHeader.png';



const Header = () => {
  function handleClick(){
    window.localStorage.clear();
    
  }
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Home">
          <img src={Logo} alt="Logo"/>
        </Link>
        <div className={styles.divAdd}>
          <Link className={styles.btnLink} to="/addClient" aria-label="New Client">
            <button className={styles.btn}><strong>+</strong> Novo Cliente</button>
          </Link>
          <Link onClick={handleClick} className={styles.login} to="/Login">Sair</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
