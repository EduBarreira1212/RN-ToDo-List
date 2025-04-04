import { useAtom } from "jotai";
import atoms from "../atoms";
import { ToDo } from "../types";

type AddItemParameters = {
    name: string;
    description: string;
};

const useToDoList = () => {
    const [items, setItems] = useAtom(atoms.items);
  
    const [completedItems, setCompletedItems] = useAtom(atoms.completedItems);
  
    const addItem = ({ name, description }: AddItemParameters) => {
      setItems((s) => {
        const newItem = {
          name: name,
          description: description,
          done: false,
        };
  
        const oldState = [...s];
  
        oldState.push(newItem);
  
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
  
          return oldState;
        });
  
        setCompletedItems((s) => {
          const oldState = [...s];
  
          oldState.splice(index, 1);
  
          return oldState;
        });
  
        return;
      }
  
      setItems((s) => {
        const oldState = [...s];
  
        oldState.splice(index, 1);
  
        return oldState;
      });
  
      setCompletedItems((s) => {
        const oldState = [...s];
  
        const itemToAdd = {
          ...item,
          done: true,
        };
  
        oldState.push(itemToAdd);
  
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

        return oldState;
      });
    };

    return {
        items,
        completedItems,
        addItem,
        completeItem,
        editItem,
        removeItem,
      };
    };
    
    export default useToDoList;