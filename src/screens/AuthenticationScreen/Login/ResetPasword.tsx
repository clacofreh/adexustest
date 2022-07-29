import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import React from 'react';
interface Props {
  onFinish: () => void;
}
const ResetPasword = ({ onFinish }: Props) => {
  return (
    <Modal animationType="fade" transparent>
      <View
        style={{
          width: '100%',
          backgroundColor: 'white',
          height: '100%',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>ResetPasword</Text>
          <Button onPress={onFinish} title="close" />
        </View>
      </View>
    </Modal>
  );
};

export default ResetPasword;

const styles = StyleSheet.create({});
