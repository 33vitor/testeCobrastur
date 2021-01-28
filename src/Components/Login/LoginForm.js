import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';

  const LoginForm = () => {
    const email = useForm();
    const password = useForm();

    const { userLogin } = React.useContext(UserContext);

    async function handleSubmit(event){
      event.preventDefault();

      if(email.validate() && password.validate()){
        userLogin(email.value, password.value);
    }};


    return (
      <form onSubmit={handleSubmit}>
          <Input name="email "label="Email" type="email" {...email}/>

        <Input name="password" label="Senha" type="password" {...password}/>
        <Button>Entrar</Button>
      </form>
    )
}

export default LoginForm
