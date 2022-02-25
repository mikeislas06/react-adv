import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MyTextInput, MySelect } from '../components';

import '../styles/styles.css';

const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          terms: Yup.boolean()
            .oneOf([true], 'Must accept Terms and conditions')
            .required('Required'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'This option is not allowed')
            .required('Required'),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder='Miguel'
            />

            <MyTextInput
              label='Last Name'
              name='lastName'
              placeholder='Islas'
            />

            <MyTextInput
              label='Email'
              name='email'
              placeholder='a@bc.com'
              type='email'
            />

            <MySelect label='Job Type' name='jobType'>
              <option value=''>Select an option</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Jr</option>
            </MySelect>

            <MyCheckbox label='Terms and Conditions' name='terms' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikAbstractation;
