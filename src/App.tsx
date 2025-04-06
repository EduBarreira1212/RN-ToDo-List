import React, { useEffect } from 'react';
import Navigation from './navigation';
import useToDoList from './hooks/useToDoList';

const App: React.FC = () => {
  const { loadLocalData } = useToDoList();

  useEffect(() => {
    loadLocalData();
  }, []);

  return <Navigation />;
};

export default App;
