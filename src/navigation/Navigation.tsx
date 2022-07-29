import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoggedOutNavigationStack from './LoggedOutNavigation';
import LoggedInNavigationStack from './LoggedInNavigationStack';
import { useAuthContext } from '../hooks/useAuthContext';

export type RootStackParams = {
  Home: undefined;
  Profile: undefined;
  Auth: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const Navigation = () => {
  const { isLoggedIn } = useAuthContext();
  return isLoggedIn ? (
    <LoggedInNavigationStack />
  ) : (
    <LoggedOutNavigationStack />
  );
};

export default Navigation;
