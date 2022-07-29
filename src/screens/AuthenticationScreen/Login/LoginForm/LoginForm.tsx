import React, { useCallback, useContext, useState } from 'react';
import { Text } from 'react-native';
import { Field } from 'formik';
import * as Yup from 'yup';
import AppForm from './Form/AppForm';
import AppFormField from './Form/AppFormField';
import AppFormSubmitButton from './Form/AppFormSubmitButton';
import AuthContext from '../../../../context/Auth/AuthContext';
import reqresApi from '../../../../api/reqresApi';
import ErrorCredentials from './ErrorCredentials';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Debe incluir al menos una minuscula')
    .matches(/\w*[A-Z]\w*/, 'Debe incluir al menos una mayuscula')
    .matches(/\d/, 'Password must have a number')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
});

const LoginForm = () => {
  const { isLoggedIn, login } = useContext(AuthContext);
  const [asError, setAsError] = useState({ error: '', state: false });
  const handleSubmit = useCallback(values => {
    try {
      reqresApi
        .post('/login', {
          email: values.email,
          password: values.password,
        })
        .then(res => {
          console.log(res);
          login();
        })
        .catch(err => {
          console.log(err.response);

          setAsError({ error: err, state: true });
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  if (asError.state)
    return (
      <ErrorCredentials
        onFinish={() => setAsError({ error: '', state: false })}
        error={asError.error}
      />
    );
  return (
    <>
      <Text>LOGIN</Text>
      <AppForm
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values: any) => {
          handleSubmit(values);
        }}>
        <Field
          component={AppFormField}
          name="email"
          placeholder="Email"
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <Field
          component={AppFormField}
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormSubmitButton title="Ingresar" />
      </AppForm>
    </>
  );
};

export default LoginForm;

