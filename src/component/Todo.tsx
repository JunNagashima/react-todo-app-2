import { Button, ListItem, UnorderedList } from "@chakra-ui/react";
import { TodoList } from "../App";

type Props = {
    showTodoLists: TodoList[];
    todoLists: TodoList[];
    setTodoLists: (newValue: TodoList[]) => void;
    setShowTodoLists: (newValue: TodoList[]) => void;
    setEditTodoList: (newValue: TodoList) => void;
    setIsEdit: (newValue: boolean) => void;
}

function Todo({ showTodoLists, todoLists, setTodoLists, setShowTodoLists, setEditTodoList, setIsEdit }: Props) {
    const handleEdit = (id: string) => {
        const selectedTodoList: TodoList[] | null = todoLists.filter((todolist: TodoList) => todolist.id === id);
        console.log(selectedTodoList[0])
        setEditTodoList(selectedTodoList[0]);
        setIsEdit(true);
    }

    const handleDelete = (id: string) => {
        const newTodoLists = todoLists.filter((todolist: TodoList) => todolist.id !== id);
        setTodoLists(newTodoLists);
        setShowTodoLists(newTodoLists);
    }
    
    return (
        <div>
            {showTodoLists.map((todoList: TodoList) => {
                return (
                    <UnorderedList key={todoList.id}>
                    <ListItem>
                        ID: {todoList.id}, タイトル：{todoList.title}, 詳細：{todoList.details}, ステータス：{todoList.status}
                    </ListItem>
                    <Button mr={5} onClick={() => handleEdit(todoList.id)}>編集</Button>
                    <Button onClick={() => handleDelete(todoList.id)}>削除</Button>
                    </UnorderedList>
                )
            })}
        </div>
    )
}

export default Todo;