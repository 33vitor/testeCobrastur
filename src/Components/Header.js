import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import Logo from '../Assets/logoHeader.png';


const Header = () => {
  let login = ((window.location.href).includes("Login"))

  if(login){
    login = styles.hidden
  }else{
    login =  ""
  }
  function handleClick(){
    window.localStorage.clear();
    
  }
  return (
    <header className={`${styles.header} ${login}`}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Home">
          <img src={Logo} alt="Logo"/>
        </Link>
        <Link onClick={handleClick} className={styles.login} to="/Login">Sair</Link>
      </nav>
    </header>
  )
}

export default Header
