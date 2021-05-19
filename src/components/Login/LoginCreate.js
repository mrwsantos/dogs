import React from 'react';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../Api';
import { UserContext } from '../../UserContext';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    });
    const response = await fetch(url, options);

    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeDown">
      <h1 className="title">Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        <Button>Create</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
