import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './LoginForm/LoginForm';

const Login = () => {
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <View style={styles.formContainer}>
        <LoginForm />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flex: 15,
  },

  formContainer: {
    flex: 50,
  },
});
