import {  Text, View, Modal, Button } from 'react-native';
import React from 'react';
interface Props {
  onFinish: () => void;
  error: any;
}
const ErrorCredentials = ({ onFinish, error }: Props) => {
  return (
    <Modal animationType="fade" transparent>
      <View
        style={{
          width: '50%',
          backgroundColor: 'lightgray',
          height: '50%',
          marginTop: 100,
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{` ${error.response.data.error} `}</Text>
          <Button onPress={onFinish} title="close" />
        </View>
      </View>
    </Modal>
  );
};

export default ErrorCredentials;
