import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST } from '../../api';
import {useHistory} from 'react-router-dom';
import logoLogin from '../../Assets/logoLogin.png';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css'

  const LoginForm = () => {

    const email = useForm();
    const password = useForm();
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useHistory();


    async function handleSubmit(event){
      event.preventDefault();

      if(email.validate() && password.validate()){
        setLoading(true);
        const {url, options} = TOKEN_POST({
          email : email.value,
          password: password.value
        });
        const response = await fetch(url, options);
        if(!response.ok){
          setError(true);
          setLogin(false);
          setLoading(false);
        }else{
          setError(false);
          setLogin(response.statusText);
          setLoading(false);
          const json = await response.json();
          window.localStorage.setItem('token', json.token);
          navigate.push("/")
        }
        
      }
    };


    return (
      <section className="animeLeft">
        <div className={styles.login}>
          <img src={logoLogin} className={styles.logo}/>
          <form onSubmit={handleSubmit} className={styles.form}>
            <Input name="email "label="Email" type="email" {...email}/>
            <br/>
            <Input name="password" label="Senha" type="password" {...password}/>
            <br/>

            {loading ? 
            <Button disabled>Carregando...</Button>
            :
            <Button>Entrar</Button>
          }
          <Error error={error}/>
          </form>
        </div>
      </section>
    )
}

export default LoginForm