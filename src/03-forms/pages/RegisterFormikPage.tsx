import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

const RegisterFormikPage = () => {
  return (
    <div>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .min(2, 'Must be at least 2 characters')
            .max(15, 'Must be less than 15 characters')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password1: Yup.string()
            .min(6, 'Must be at least 6 characters')
            .required('Required'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1'), null], 'Passwords must match')
            .required('Required'),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <h1>Register Formik Page</h1>
            <MyTextInput
              label='Full Name'
              name='fullName'
              placeholder='Full name'
              type='text'
            />
            <MyTextInput
              label='Email'
              name='email'
              placeholder='John@doe.com'
              type='email'
            />
            <MyTextInput
              label='Password'
              name='password1'
              placeholder='*********'
              type='password'
            />
            <MyTextInput
              label='Repeat Password'
              name='password2'
              placeholder='*********'
              type='password'
            />
            <button type='submit'>Create</button>
            <button type='button' onClick={handleReset}>
              Reset form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormikPage;
