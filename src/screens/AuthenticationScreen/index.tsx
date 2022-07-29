import React, { useState, lazy, Suspense } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Login from './Login';
const Signup = lazy(() => import('./Signup'));

const AuthenticationScreen = () => {
  const [mode, setMode] = useState('login');
  const switchAuthModeHandler = () => {
    setMode(prevMode => (prevMode === 'login' ? 'signup' : 'login'));
  };
  let authElement = <Login />;
  let switchBtnCaption = 'Crea una nueva cuenta';
  if (mode !== 'login') {
    authElement = <Signup />;
    switchBtnCaption = 'Volver a inicio de sesión';
  }
  return (
    <View style={{ height: '100%', width: '100%' }}>
      <Suspense fallback={<Text>Loading...</Text>}>{authElement}</Suspense>
      <View style={{ alignSelf: 'center', marginBottom: 20 }}>
        <TouchableOpacity onPress={switchAuthModeHandler}>
          <Text style={{ color: 'gray', fontWeight: 'bold' }}>
            {switchBtnCaption}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthenticationScreen;
