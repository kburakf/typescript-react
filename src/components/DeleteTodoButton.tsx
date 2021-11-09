import Icon from "@chakra-ui/icon";
import { FiTrash } from "react-icons/fi";
import { useMutation, useQueryClient } from "react-query";
import { Todo } from "../types";
import client from "../utils/client";

interface ITodoProps {
  todo: Todo,
};

const DeleteTodoButton: React.FC<ITodoProps> = (props) => {
  const queryClient = useQueryClient();

  const { todo } = props;

  const deleteMutation = useMutation(
    (todo: Todo) => client.delete(`/todos/${todo.id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      }
    },
  );

  return (
    <Icon
      key={todo.id}
      onClick={() => deleteMutation.mutate(todo)}
      color='red.300'
      _hover={{ color: 'red.700' }}
      fontSize='2xl'
      cursor='pointer'
      as={FiTrash}
    />
  )
};

export default DeleteTodoButton;