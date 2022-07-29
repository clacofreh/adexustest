import { Image, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/Navigation';
interface Props extends NativeStackScreenProps<RootStackParams, 'Profile'> {}
const ProfileScreen = ({ route, navigation }: Props) => {
  const user = route.params;
  const uri = `${user.avatar}`;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {uri && (
        <Image
          source={{ uri }}
          style={{
            width: 200,
            height: 200,
            borderRadius: 5,
          }}
        />
      )}
      <Text>{user.first_name}</Text>
      <Text>{user.last_name}</Text>
      <Text>{user.email}</Text>
    </View>
  );
};

export default ProfileScreen;
