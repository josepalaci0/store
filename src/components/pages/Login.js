import React, { useState} from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import axios from 'axios';

/*Login */
const Login = (props) => {
  const { register, handleSubmit } = useForm()
  const [loginErr, setLoginErr] = useState("");
  const [login, setLogin]= useState("");
  const history = useHistory();
  const submit = data => {
    console.log(data)

    axios.post(`https://ecommerce-exercise-backend.herokuapp.com/login/`, data)
      .then(res => setLogin(res.data.access))    
      .catch(() => setLoginErr(`Invalid Credential`));    
  }
  localStorage.setItem('login',login);
  const Home =() =>{
    if(login!==""){
      history.push("/shop/")
    }
  }
  return (
    <div>
      <form className='container__form' onSubmit={handleSubmit(submit)}>
        <br />
        <h1>Login</h1>
        <div className='form form__email'>
          <input {...register("email")} type="email" required />
        </div>
        <div className='form form__password'>
          <input {...register("password")} type="password" />
        </div>
        <div className='form form__button'>
          <button>Login</button>
        </div>
      </form>  
      {Home()}
      {loginErr}
      
      
      


    </div>);
};

export default Login;
