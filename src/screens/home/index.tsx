import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, ToDo } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import EmptyList from './components/EmptyList';
import ItemList from './components/ItemList';
import useToDoList from '../../hooks/useToDoList';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [showCompletedItems, setShowCompletedItems] = useState(false);

  const { items, completedItems, completeItem, removeItem } = useToDoList();

  const handleShowCompletedItems = () => {
    setShowCompletedItems(!setShowCompletedItems);
  };

  const handleAdd = () => {
    navigation.navigate('Add');
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatListContent}
        ListEmptyComponent={EmptyList}
        ItemSeparatorComponent={() => <View style={{ height: 21 }} />}
        ListFooterComponent={() => <View style={{ height: 21 }} />}
        data={showCompletedItems ? completedItems : items}
        renderItem={({ item, index }) => {
          return (
            <ItemList
              index={index}
              item={item}
              completeItemPress={completeItem}
              removeItemPress={removeItem}
            />
          );
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
