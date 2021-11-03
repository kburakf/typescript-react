import { Box, Flex, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import client from "../utils/client";
import { Todo } from '../types';
import { DeleteTodoButton, UpdateTodoButton } from './';
import NewTodoButton from "./NewTodoButton";

const Todos: React.FC = () => {
  const { isLoading, data: todos } = useQuery<Todo[]>('todos', () => {
    return client
      .get('todos')
      .then((res) => res.data.todos);
  });

  if (isLoading) {
    return null;
  }

  if (todos) {
    return (
      <Box
        mt='24'
        mx='auto'>
        <Flex
          alignItems='center'
          justifyContent='center'
          pos='relative'
        >
          <Box
            px='8'
            pt='6'
            pb='10'
            bgColor='gray.light'
            borderRadius='16px'
            experimental_spaceY='4'
          >
            {todos.map((todo: Todo) => (
              <Flex
                alignItems='center'
                justifyContent='space-between'
                experimental_spaceX='4'
              >
                <UpdateTodoButton key={todo.id} todo={todo} />

                <Text color='gray.dark' fontSize='xl'>
                  {todo.title}
                </Text>

                <DeleteTodoButton key={todo.id} todo={todo} />
              </Flex>
            ))}

            <NewTodoButton />
          </Box>
        </Flex >

      </Box >
    )
  }

  return null;
};

export default Todos;