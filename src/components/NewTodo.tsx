import { Box } from "@chakra-ui/react";
import { AddTodoButton } from './';

const NewTodo: React.FC = () => {
  return (
    <Box mt='24'>
      <AddTodoButton />
    </Box >
  )
};

export default NewTodo;