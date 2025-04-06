import { useAtom } from "jotai";
import atoms from "../atoms";
import { ToDo } from "../types";
import asyncStorage, { keys } from "../asyncStorage";

type AddItemParameters = {
    name: string;
    description: string;
};

const useToDoList = () => {
    const [items, setItems] = useAtom(atoms.items);
  
    const [completedItems, setCompletedItems] = useAtom(atoms.completedItems);

    const saveItemsOnAsyncStorage = (data: ToDo[]) => {
      asyncStorage.saveData(keys.items, data);
    };
  
    const saveCompletedItemsOnAsyncStorage = (data: ToDo[]) => {
      asyncStorage.saveData(keys.completedItems, data);
    };
  
    const addItem = ({ name, description }: AddItemParameters) => {
      setItems((s) => {
        const newItem = {
          name: name,
          description: description,
          done: false,
        };
  
        const oldState = [...s];
  
        oldState.push(newItem);

        saveItemsOnAsyncStorage(oldState);
  
        return oldState;
      });
    };
  
    const completeItem = (item: ToDo, index: number) => {
      if (item.done) {
        setItems((s) => {
          const oldState = [...s];
  
          const itemToAdd = {
            ...item,
            done: false,
          };
  
          oldState.push(itemToAdd);

          saveItemsOnAsyncStorage(oldState);
  
          return oldState;
        });
  
        setCompletedItems((s) => {
          const oldState = [...s];
  
          oldState.splice(index, 1);

          saveCompletedItemsOnAsyncStorage(oldState);
  
          return oldState;
        });
  
        return;
      }
  
      setItems((s) => {
        const oldState = [...s];
  
        oldState.splice(index, 1);

        saveItemsOnAsyncStorage(oldState);
  
        return oldState;
      });
  
      setCompletedItems((s) => {
        const oldState = [...s];
  
        const itemToAdd = {
          ...item,
          done: true,
        };
  
        oldState.push(itemToAdd);

        saveCompletedItemsOnAsyncStorage(oldState);
  
        return oldState;
      });
    };

    const editItem = (index: number, newContent: ToDo) => {
      setItems((s) => {
        const oldState = [...s];
  
        oldState[index] = {
          ...oldState[index],
          ...newContent,
        };
  
        return oldState;
      });
    };
  
    const removeItem = (index: number) => {
      setItems((s) => {
        const oldState = [...s];
  
        oldState.splice(index, 1);

        saveItemsOnAsyncStorage(oldState);

        return oldState;
      });
    };

    const loadLocalData = async () => {
      const localItems = await asyncStorage.loadData(keys.items);
  
      if (localItems) {
        setItems(localItems);
      }
  
      const localCompletedItems = await asyncStorage.loadData(keys.completedItems);
  
      if (localCompletedItems) {
        setCompletedItems(localCompletedItems);
      }
    };

    return {
        items,
        completedItems,
        addItem,
        completeItem,
        editItem,
        removeItem,
        loadLocalData
      };
    };
    
    export default useToDoList;