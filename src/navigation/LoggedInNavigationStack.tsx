import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProfileScreen } from '../screens';

export type LoggedInStackParams = {
  Home: undefined;
  Profile: undefined;
};

const LoggedInNavigation = createNativeStackNavigator<LoggedInStackParams>();
const LoggedOutNavigationStack = () => {
  return (
    <LoggedInNavigation.Navigator>
      <LoggedInNavigation.Screen name="Home" component={HomeScreen} />
      <LoggedInNavigation.Screen name="Profile" component={ProfileScreen} />
    </LoggedInNavigation.Navigator>
  );
};
export default LoggedOutNavigationStack;
