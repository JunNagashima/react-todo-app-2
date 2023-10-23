import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { TodoList } from "../App";
import { useEffect, useState } from "react";

type Props = {
    showTodoLists: TodoList[];
    todoLists: TodoList[];
    setShowTodoLists: (newValue: TodoList[]) => void;
}

function Filter({showTodoLists, todoLists, setShowTodoLists}: Props) {
    const [filter, setFilter] = useState<TodoList[]>(showTodoLists);

    useEffect(() => {
        setFilter(todoLists);
    }, [todoLists])

    const handleFilter = (e:  React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        switch (e.currentTarget.value) {
            case '1':
            setShowTodoLists(filter);
            break;
            case '2':
            const newTodoLists = filter.filter((todoList: TodoList) => todoList.status === '未着手');
            setShowTodoLists(newTodoLists);
            break;
            case '3':
            const newTodoLists2 = filter.filter((todoList: TodoList) => todoList.status === '着手中');
            setShowTodoLists(newTodoLists2);
            break;
            case '4':
            const newTodoLists3 = filter.filter((todoList: TodoList) => todoList.status === '完了');
            setShowTodoLists(newTodoLists3);
            break;
        }
    }
    
    return (
        <RadioGroup mb={5} >
          <Stack direction='row'>
            <Radio value='1' onChange={handleFilter}>全て</Radio>
            <Radio value='2' onChange={handleFilter}>未着手</Radio>
            <Radio value='3' onChange={handleFilter}>着手中</Radio>
            <Radio value='4' onChange={handleFilter}>完了</Radio>
          </Stack>
        </RadioGroup>
    )
}

export default Filter;