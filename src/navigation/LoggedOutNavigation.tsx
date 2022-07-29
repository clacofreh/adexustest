import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticationScreen } from '../screens';

export type LoggedOutStackParams = {
  Home: undefined;
  Auth: undefined;
};

const LoggedOutNavigation = createNativeStackNavigator<LoggedOutStackParams>();
const LoggedOutNavigationStack = () => {
  return (
    <LoggedOutNavigation.Navigator>
      <LoggedOutNavigation.Screen
        name="Auth"
        component={AuthenticationScreen}
      />
    </LoggedOutNavigation.Navigator>
  );
};
export default LoggedOutNavigationStack;
