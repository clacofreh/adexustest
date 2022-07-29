import React, { useEffect, useMemo } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { useUsers } from '../hooks/useUsers';

import { useAuthContext } from '../hooks/useAuthContext';
import { UserResponse } from '../interfaces/usersInterface';
import UserCard from '../components/UserCard';

export const HomeScreen = () => {
  const { userList, isLoading } = useUsers();
  const { users } = userList;
  const { isLoggedIn, logout } = useAuthContext();
  const memoizedUserList = useMemo(() => users, [users]);
  useEffect(() => {
    console.log(isLoggedIn, 'useAuthContext');
    console.log(userList, 'useUsers');
  }, []);

  return (
    <ScrollView>
      <Button title="Logout" onPress={logout} />
      {userList &&
        memoizedUserList.map((user: UserResponse) => (
          <View style={{ alignItems: 'center' }} key={user.id}>
            <UserCard user={user} />
          </View>
        ))}
    </ScrollView>
  );
};
