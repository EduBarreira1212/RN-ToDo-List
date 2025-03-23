import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, ToDo } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import EmptyList from './components/EmptyList';
import ItemList from './components/ItemList';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [showCompletedItems, setShowCompletedItems] = useState(false);

  const handleShowCompletedItems = () => {
    setShowCompletedItems(!setShowCompletedItems);
  };

  const handleAdd = () => {
    navigation.navigate('Add');
  };

  const toDoList: ToDo[] = [
    {
      name: 'to do 1',
      done: false,
    },
    {
      name: 'to do 2',
      done: true,
    },
    {
      name: 'to do 3',
      done: false,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatListContent}
        ListEmptyComponent={EmptyList}
        ItemSeparatorComponent={() => <View style={{ height: 21 }} />}
        ListFooterComponent={() => <View style={{ height: 21 }} />}
        data={showCompletedItems ? toDoList.filter((toDo) => toDo.done) : toDoList}
        renderItem={({ item, index }) => {
          return <ItemList index={index} item={item} />;
        }}
      />
      <View style={styles.buttonsContainer}>
        <Button
          title={showCompletedItems ? 'Show all' : 'Show only done'}
          onPress={handleShowCompletedItems}
        />
        {!showCompletedItems ? <Button title="Add activity" onPress={handleAdd} /> : null}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
