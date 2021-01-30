import React from 'react';
import styles from './CellTableHome.module.css'

const CellTableHome = ({data}) => {
  const fullname = `${data.first_name} ${data.last_name}`
  const [url, setUrl] = React.useState(data.avatar)
  const [name, setName] = React.useState(fullname)
  const [email, setEmail] = React.useState(data.email)
  

  function handleClick(){
  var newPic = window.prompt("Digite a Url da Nova Imagem:", url)
  if(newPic !== "null"){
    setUrl(newPic);
  }
  var newName = window.prompt("Digite o Novo Nome:", name)
  if(newName !== "null"){
    setName(newName);
  }
  var newEmail = window.prompt("Digite o Novo Email:", email)
  if(newEmail !== "null"){
    setEmail(newEmail);
  }
  }

  return (
    <tr className={styles.main}> 

      <td className={styles.tdPhoto}><img className={styles.photo}  src={url} alt={name}/></td>
      <td className={styles.name}>{name}</td>
      <td className={styles.email}><span>{email}</span></td>
      <td className={styles.tdEdit}><button className={styles.edit} onClick={handleClick}>Editar</button></td>

    </tr>
  )
}

export default CellTableHome
