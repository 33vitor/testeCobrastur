import React from 'react'
import TableHome from './TableHome';
import styles from './TableHome.module.css';

const Home = () => {
  let [page, setPage] = React.useState(1);
  let [style, setStyle] = React.useState("");
  function handleClick(event){
    setPage(event.target.innerText);

  }
  return (
    <section className="listUsers">
      <TableHome page={page}/>
      <div className={styles.pages}>
        <button className={`${styles.btnPages} ${style}`} onClick={handleClick}>1</button>
        <button className={`${styles.btnPages} ${style}`} onClick={handleClick}>2</button>
      </div>
    </section>
  )
}

export default Home
