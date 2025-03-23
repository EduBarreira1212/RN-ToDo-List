import React from 'react';
import { Button, Text } from 'react-native';
import { RootStackParamList } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

type AddScreenProps = StackScreenProps<RootStackParamList, 'Add'>;

const AddScreen: React.FC<AddScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Add Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default AddScreen;
