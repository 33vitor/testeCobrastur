import React from 'react';
import styles from '../NewClient/FormNewClient.module.css';
import icon from '../../Assets/client.svg';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import { Link } from 'react-router-dom';
import { CLIENT_POST } from '../../api';
import {useHistory} from 'react-router-dom';

const FormNewClient = () => {
  const name = useForm();
  const profession = useForm();
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useHistory();


  async function handleSubmit(event){
    event.preventDefault();

    if(name.validate() && profession.validate()){
      setLoading(true);
      const {url, options} = CLIENT_POST({
        name : name.value,
        job: profession.value
      });
      const response = await fetch(url, options);
      if(!response.ok){
        alert("Falha no Cadastro, tente novamente");
        setLogin(false);
        setLoading(false);
      }else{
        setError(false);
        setLoading(false);
        const json = await response.json();
        alert("Usuário "+json.name+" criado com sucesso!!!");
        navigate.push("/");
      }
      
    }
  };



  return (
    <section className="animeLeft formNewClient">
      <div className={styles.boxTitle}>
        <img src={icon} className={styles.iconTitle} alt="Painel de Clientes"/>
        <h3 className={styles.title} >Painel de Clientes</h3>
      </div>
      <div className={styles.pTitle}>
        <p><strong>Novo Cliente</strong></p>
        <br/>
        <p>Informe os campos a seguir para cadastrar um novo cliente:</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.tableForm}>
        <br/>
        <Input name="name" label="Nome" type="text" {...name}/>
        <br/>
        <Input name="profession" label="Profissão" type="text" {...profession}/>
        <div>
          <br/>
          <div className={styles.listButtons}>
            {loading ? 
            <Button disabled>Carregando...</Button>
            :
            <Button>Cadastrar</Button>
          }</div>
          <Link to='/'><Button>Voltar</Button></Link> 
        </div>
      </form>

    </section>
  )
}

export default FormNewClient
