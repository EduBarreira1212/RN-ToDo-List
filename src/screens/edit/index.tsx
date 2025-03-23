import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';

type EditScreenProps = StackScreenProps<RootStackParamList, 'Edit'>;

const EditScreen: React.FC<EditScreenProps> = ({ route, navigation }) => {
  const { itemId } = route.params;

  return (
    <SafeAreaView>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default EditScreen;
