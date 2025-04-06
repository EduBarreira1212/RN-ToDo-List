export type RootStackParamList = {
  Home: undefined;
  Edit: {item: ToDo; index: number};
  Add: undefined;
};

export type ToDo = {
  name: string;
  description?: string;
  done: boolean;
};
