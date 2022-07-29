import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserResponse } from '../interfaces/usersInterface';

const UserCard = ({ user }: { user: UserResponse }) => {
  const navigation = useNavigation();
  const uri = `${user.avatar}`;
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Profile', user)}>
      <View
        style={{
          backgroundColor: 'gray',
          marginVertical: 10,
          alignItems: 'center',
          width: 350,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
          }}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginHorizontal: 3 }}>{user.first_name}</Text>
              <Text>{user.last_name}</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            {uri && (
              <Image
                source={{ uri }}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 5,
                  alignSelf: 'flex-end',
                }}
              />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
