import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details', { itemId: 1 })} />
    </View>
  );
};

export default HomeScreen;
