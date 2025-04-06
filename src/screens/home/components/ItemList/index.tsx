import React from 'react';
import { RootStackParamList, ToDo } from '../../../../types';
import { Text, View } from 'react-native';
import styles from './styles';
import ActionButton from '../ActionButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const iconEdit = require('../../../../assets/icons/Pencil.png');
const iconRemove = require('../../../../assets/icons/Trash.png');
const iconComplete = require('../../../../assets/icons/CheckCircle.png');

type ItemListProps = {
  index: number;
  removeItemPress: (index: number) => void;
  completeItemPress: (item: ToDo, index: number) => void;
  item: ToDo;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Edit'>;

const ItemList = ({ item, index, completeItemPress, removeItemPress }: ItemListProps) => {
  const navigation = useNavigation<NavigationProp>();

  const handleClickEdit = () => {
    navigation.navigate('Edit', { index, item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>{item.name}</Text>
        <Text>{item.description || 'No description'}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <ActionButton source={iconEdit} onPress={handleClickEdit} />
        {!item.done ? (
          <ActionButton source={iconRemove} onPress={() => removeItemPress(index)} />
        ) : null}
        <ActionButton source={iconComplete} onPress={() => completeItemPress(item, index)} />
      </View>
    </View>
  );
};

export default ItemList;
