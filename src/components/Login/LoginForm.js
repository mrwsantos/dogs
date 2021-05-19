import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../../Helpers/Error';

import styles from './LoginForm.module.css';
import stylesBtn from '../Form/Button.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeDown">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />

        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Sign In</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        I don't know my password
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Sign Up</h2>
        <p>Don't you have an account?</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
