import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import useToDoList from '../../hooks/useToDoList';
import styles from './styles';

type EditScreenProps = StackScreenProps<RootStackParamList, 'Edit'>;

const EditScreen: React.FC<EditScreenProps> = ({ navigation, route }) => {
  const { item, index } = route.params;

  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);

  const { editItem } = useToDoList();

  const handleEdit = () => {
    editItem(index, { ...item, name, description });

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
        <Button title="Update" onPress={handleEdit} />
        <Button title="Cancel" onPress={navigation.goBack} />
      </View>
    </SafeAreaView>
  );
};

export default EditScreen;
