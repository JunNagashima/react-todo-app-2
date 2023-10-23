import { TodoList } from "../App";
import { Button, FormControl, Input, Select } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInput = {
  title: string;
  details: string;
  status: TodoList['status'];
}

type Props = {
    todoLists: TodoList[];
    editTodoList: TodoList;
    isEdit: boolean;
    setShowTodoLists: (newValue: TodoList[]) => void;
    setTodoLists: (newValue: TodoList[]) => void;
    setIsEdit: (newValue: boolean) => void;
}

function Form({ todoLists, editTodoList, isEdit, setShowTodoLists, setTodoLists, setIsEdit}: Props) {
  const { 
    register, 
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormInput>({
    defaultValues: editTodoList,
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data)
    if (isEdit) {
      const newTodoLists = todoLists.map((todoList: TodoList) => {
        if (todoList.id === editTodoList.id) {
          return {...data, id: editTodoList.id};
        } else {
          return todoList;
        }
      })
      setTodoLists(newTodoLists);
      setShowTodoLists(newTodoLists);
      setIsEdit(!isEdit);
      reset();
    } else {
      const id: string = Math.random().toString(32).substring(2);
      console.log([...todoLists, {...data, id}])
      setTodoLists([...todoLists, {...data, id}]);
      setShowTodoLists([...todoLists, {...data, id}]);
      reset();
    }
  }

  const onCancel = () => {
    setIsEdit(!isEdit);
    reset();
  }

  return (
      <div >
          {isEdit ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl mb={5}>
                  <Input 
                    placeholder='title' 
                    id="title"
                    defaultValue={editTodoList.title}
                    {...register("title", { required: true })} 
                  />
                  {errors.title && <p className="error">タイトルの入力は必須です</p>}
                  <Input
                    placeholder='details' 
                    id="details"
                    defaultValue={editTodoList.details}
                    {...register("details")} 
                  />
                  <Select 
                    id="stutas"
                    defaultValue={editTodoList.status}
                    {...register("status")} 
                  >
                  <option>未着手</option>
                  <option>着手中</option>
                  <option>完了</option>
                  </Select>
                  <Button mr={5} type="submit">更新</Button>
                  <Button onClick={onCancel}>キャンセル</Button>
                </FormControl>
              </form>
          ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl mb={5}>
                    <Input 
                      placeholder='title' 
                      id="title"
                      {...register("title", { required: true })} 
                    />
                    {errors.title && <p className="error">タイトルの入力は必須です</p>}
                    <Input 
                      placeholder='details' 
                      id="details"
                      {...register("details")} 
                    />
                    <Select 
                      id="stutas"
                      {...register("status")} 
                    >
                    <option>未着手</option>
                    <option>着手中</option>
                    <option>完了</option>
                    </Select>
                    <Button type="submit">保存</Button>
                </FormControl>
              </form>
          )}
      </div>
  )
}

export default Form;