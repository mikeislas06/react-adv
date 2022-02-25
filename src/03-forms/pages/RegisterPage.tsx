import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

const RegisterPage = () => {
  const {
    formData,
    handleOnChange,
    name,
    email,
    password1,
    password2,
    resetForm,
    isValidEmail,
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={handleOnSubmit}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={handleOnChange}
          className={`${name.trim().length < 2 && 'has-error'}`}
        />

        {name.trim().length < 2 && <span>Este campo es necesario</span>}

        <input
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={handleOnChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />

        {!isValidEmail(email) && <span>Email no es válido</span>}

        <input
          type='password'
          placeholder='Password'
          name='password1'
          value={password1}
          onChange={handleOnChange}
        />

        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>Deben ser más de 6 caracteres</span>
        )}

        <input
          type='password'
          placeholder='Repeat password'
          name='password2'
          value={password2}
          onChange={handleOnChange}
        />

        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Las contraseñas deben ser iguales</span>
        )}

        <button type='submit'>Create</button>
        <button type='button' onClick={resetForm}>
          Reset form
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
