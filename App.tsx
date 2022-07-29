import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { AuthContextProvider } from './src/context/Auth/AuthContext';

const AppState = ({ children }: any) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
