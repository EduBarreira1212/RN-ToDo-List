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
  removeItemPress?: () => void;
  completeItemPress?: () => void;
  item: ToDo;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Edit'>;

const ItemList = ({ item }: ItemListProps) => {
  const navigation = useNavigation<NavigationProp>();

  const handleClickEdit = () => {
    navigation.navigate('Edit');
  };

  const handleClickRemove = () => {};

  const handleClickComplete = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>{item.name}</Text>
        <Text>{item.description || 'No description'}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <ActionButton source={iconEdit} onPress={handleClickEdit} />
        {!item.done ? <ActionButton source={iconRemove} onPress={handleClickRemove} /> : null}
        <ActionButton source={iconComplete} onPress={handleClickComplete} />
      </View>
    </View>
  );
};

export default ItemList;
