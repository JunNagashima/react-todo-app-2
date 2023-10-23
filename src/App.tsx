import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Form from './component/Form';
import Todo from './component/Todo';
import Filter from './component/Filter';

export type TodoList = {
  id: string;
  title: string;
  details: string;
  status: '未着手' | '着手中' | '完了';
}

function App() {
  // const [todoLists, setTodoLists] = useState<TodoList[]>([]);
  const [showTodoLists, setShowTodoLists] = useState<TodoList[]>([{
    id: '1',
    title: 'TEST1',
    details: 'TEST1',
    status: '未着手',
  },
  {
    id: '2',
    title: 'TEST2',
    details: 'TEST2',
    status: '着手中',
  },
  {
    id: '3',
    title: 'TEST3',
    details: 'TEST3',
    status: '完了',
  },
]);

  const [todoLists, setTodoLists] = useState<TodoList[]>([
    {
      id: '1',
      title: 'TEST1',
      details: 'TEST1',
      status: '未着手',
    },
    {
      id: '2',
      title: 'TEST2',
      details: 'TEST2',
      status: '着手中',
    },
    {
      id: '3',
      title: 'TEST3',
      details: 'TEST3',
      status: '完了',
    },
  ]);

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [editTodoList, setEditTodoList] = useState<TodoList>({
    id: '',
    title: '',
    details: '',
    status: '未着手',
  })

  // useEffect例
  useEffect(() => {
    console.log(new Date().toLocaleString());
  }, [todoLists])

  return (
    <ChakraProvider>
      <div>
        <h1>Todo List</h1>
        <Form 
          todoLists={todoLists} 
          editTodoList={editTodoList} 
          isEdit={isEdit}
          setShowTodoLists={setShowTodoLists}
          setTodoLists={setTodoLists}
          setIsEdit={setIsEdit}
        />
      </div>
      <div>
        <Filter
          showTodoLists={showTodoLists}
          todoLists={todoLists}
          setShowTodoLists={setShowTodoLists}
        />
      </div>
      <div>
        <Todo 
          showTodoLists={showTodoLists}
          todoLists={todoLists} 
          setTodoLists={setTodoLists}
          setShowTodoLists={setShowTodoLists}
          setEditTodoList={setEditTodoList}
          setIsEdit={setIsEdit}
        />
      </div>
    </ChakraProvider>
  )
}

export default App
