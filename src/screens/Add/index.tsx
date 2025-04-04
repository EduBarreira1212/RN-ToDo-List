import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import useToDoList from '../../hooks/useToDoList';
import styles from './styles';

type AddScreenProps = StackScreenProps<RootStackParamList, 'Add'>;

const AddScreen: React.FC<AddScreenProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const { addItem } = useToDoList();

  const handleEdit = () => {
    if (!name || !description) {
      Alert.alert('Error', 'All fields are obrigatory');

      return;
    }

    addItem({
      name: name,
      description: description,
    });

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Save" onPress={handleEdit} />
        <Button title="Cancel" onPress={navigation.goBack} />
      </View>
    </SafeAreaView>
  );
};

export default AddScreen;
