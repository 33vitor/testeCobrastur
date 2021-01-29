import React from 'react';
import styles from './CellTableHome.module.css'

const CellTableHome = ({data}) => {
  return (
    <tr className={styles.main}> 

      <td className={styles.tdPhoto}><img className={styles.photo}  src={data.avatar} alt={data.first_name}/></td>
      <td className={styles.name}>{data.first_name} {data.last_name}</td>
      <td className={styles.email}><span>{data.email}</span></td>
      <td className={styles.tdEdit}><button className={styles.edit}>Editar</button></td>

    </tr>
  )
}

export default CellTableHome
