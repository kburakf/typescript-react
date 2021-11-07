import { Box } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { AddTodoButton } from './';

const NewTodo: React.FC = () => {
  const history = useHistory();
  const token = localStorage.getItem('token');

  if (!token) {
    history.push('/login');
  }

  return (
    <Box mt='24'>
      <AddTodoButton />
    </Box >
  )
};

export default NewTodo;