import { atom } from 'jotai';
import { ToDo } from '../types';

const items = atom<ToDo[]>([]);

const completedItems = atom<ToDo[]>([]);

const atoms = {
  items,
  completedItems,
};

export default atoms;