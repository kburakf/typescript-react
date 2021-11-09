import Icon from "@chakra-ui/icon";
import { FiCheckSquare, FiSquare } from "react-icons/fi";
import { useMutation, useQueryClient } from "react-query";
import { Todo } from "../types";
import client from "../utils/client";

interface ITodoProps {
  todo: Todo,
};

const UpdateTodoButton: React.FC<ITodoProps> = (props) => {
  const queryClient = useQueryClient();

  const { todo } = props;

  const updateMutation = useMutation(
    (todo: Todo) => {
      return client
        .patch(`todos/${todo.id}`, {
          done: !todo.done
        })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    },
  );

  return (
    <Icon
      key={todo.id}
      onClick={() => updateMutation.mutate(todo)}
      fontSize='2xl'
      color='gray.light_dark'
      cursor='pointer'
      _hover={{ color: 'gray.dark' }}
      as={todo.done ? FiCheckSquare : FiSquare}
    />
  )
};

export default UpdateTodoButton;