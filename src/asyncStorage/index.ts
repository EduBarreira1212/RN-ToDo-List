import { MMKVLoader } from "react-native-mmkv-storage";
import { ToDo } from "../types";

const MMKV = new MMKVLoader().initialize();

export const keys = {
    items: 'items',
    completedItems: 'completedItems',
};

const saveData = async (key: string, value: ToDo[]) => {
    let response = null;
    try {
      response = await MMKV.setArrayAsync(key, value);
    } catch (err) {
      throw new Error(String(err));
    }
  
    return response;
  };
  
  const loadData = async (key: string) => {
    try {
      const data = await MMKV.getStringAsync(key);
  
      const dataToReturn = data != null ? JSON.parse(data) : null;
  
      return dataToReturn;
    } catch (err) {
      console.error(`Failed to load data using key ${key} - ${err}`);
    }
  };
  
  const asyncStorage = {
    saveData,
    loadData,
  };
  
  export default asyncStorage;