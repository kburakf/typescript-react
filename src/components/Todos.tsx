import { Box, Flex, Text } from "@chakra-ui/react";
import client from "../utils/client";
import { Todo } from '../types';
import { DeleteTodoButton, UpdateTodoButton } from './';
import NewTodoButton from "./NewTodoButton";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const Todos: React.FC = () => {
  const history = useHistory();
  const token = localStorage.getItem('token');
  const [todos, setTodos] = useState<Array<Todo>>([]);

  if (!token) {
    history.push('/login');
  }

  useEffect(() => {
    async function test() {
      const response = await client.get('todos/user')
      setTodos(response.data.todos)
    }

    test();
  }, []);

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