import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MySelect, MyTextInput } from '../components';

import formJson from '../data/custom-form.json';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Required');
    }

    if (rule.type === 'minLenght') {
      schema = schema.min(
        (rule as any).value || 2,
        `Must be at least ${(rule as any).value || 2} characters`
      );
    }

    if (rule.type === 'email') {
      schema = schema.email('Invalid email address');
    }
  }

  requiredFields[input.name] = schema;
}

console.log(formJson);

const validationSchema = Yup.object({ ...requiredFields });

const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, label, placeholder, options }) => {
              if (type === 'input' || type === 'password' || type === 'email') {
                return (
                  <MyTextInput
                    key={name}
                    label={label}
                    type={type as any}
                    name={name}
                    placeholder={placeholder}
                  />
                );
              } else if (type === 'select') {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value=''>- - - - - - - - - - - - -</option>
                    {options?.map((opt) => (
                      <option key={opt.id} value={opt.name}>
                        {opt.name}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              throw new Error(`El tipo: ${type} no es soportado`);
            })}

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
