import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';

type EditScreenProps = StackScreenProps<RootStackParamList, 'Edit'>;

const EditScreen: React.FC<EditScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Edit Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default EditScreen;
