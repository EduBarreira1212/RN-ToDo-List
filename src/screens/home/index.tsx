import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>To Do</Text>
      <View>
        <Button title="Show completed" onPress={() => navigation.navigate('Edit')} />
        <Button title="Create new" onPress={() => navigation.navigate('Edit')} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
