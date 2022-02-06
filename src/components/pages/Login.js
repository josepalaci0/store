import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = (props) => {
  const { register, handleSubmit } = useForm()
  const [loginErr, setLoginErr] = useState("");
  const submit = data => {
    console.log(data)
    
    axios.post(`https://ecommerce-exercise-backend.herokuapp.com/login/`, data)
      .then(res => console.log(res.data))
      .catch(() => setLoginErr(`Invalid Credential`));
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
      {loginErr}
    </div>);
};

export default Login;
