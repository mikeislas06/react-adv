import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

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
            <label htmlFor='firstName'>First Name</label>
            <Field name='firstName' type='text' placeholder='Jane' />
            <ErrorMessage name='firstName' component='span' />

            <label htmlFor='lastName'>Last Name</label>
            <Field name='lastName' type='text' placeholder='Doe' />
            <ErrorMessage name='lastName' component='span' />

            <label htmlFor='email'>Email</label>
            <Field name='email' type='email' placeholder='jd@a.com' />
            <ErrorMessage name='email' component='span' />

            <label htmlFor='jobType'>Job type</label>
            <Field name='jobType' as='select' placeholder='jd@a.com'>
              <option value=''>Select an option</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Jr</option>
            </Field>
            <ErrorMessage name='jobType' component='span' />

            <label>
              <Field name='terms' type='checkbox' />
              Terms and Conditions
            </label>
            <ErrorMessage name='terms' component='span' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikComponents;
