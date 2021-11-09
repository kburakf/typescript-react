import { Box, Flex, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import client from "../utils/client";
import { Todo } from '../types';
import { DeleteTodoButton, UpdateTodoButton } from './';
import NewTodoButton from "./NewTodoButton";
import { useHistory } from "react-router-dom";

const Todos: React.FC = () => {
  const history = useHistory();
  const token = localStorage.getItem('token');

  if (!token) {
    history.push('/login');
  }

  const { isLoading, data: todos } = useQuery<Todo[]>('todos', () => {
    return client
      .get('todos/user')
      .then((res) => res.data.todos);
  });

  if (isLoading) {
    return null;
  }

  console.log(todos)

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
            {
              !todos.length ?
                <Flex
                  direction='column'
                  alignItems='center'
                >
                  <Text>You have nothing to do 😞</Text>
                  <Text>Click the button to add some todo</Text>
                  <Text>👇🏼</Text>
                </Flex>
                : null
            }

            {todos.map((todo: Todo) => (
              <Flex
                alignItems='center'
                justifyContent='space-between'
                experimental_spaceX='4'
              >
                <UpdateTodoButton key={todo.id} todo={todo} />

                <Text key={todo.id} color='gray.dark' fontSize='xl'>
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