import { Box, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import client from "../utils/client";

const AddTodoButton: React.FC = () => {
  const history = useHistory();
  const [title, setTitle] = useState<string>('');

  const mutation = useMutation((
    newTodo: {
      todo: {
        title: string,
      },
    },
  ) => client.post('todos', newTodo), {
    onSuccess: () => history.push('/'),
  });

  return (
    <Box w='384px' mx='auto'>
      <Text
        fontSize='18px'
        fontWeight='bold'
        color='gray.default'>
        Title
      </Text>

      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        mt='4'
        name='title'
        borderColor='gray.light'
        focusBorderColor='gray.light_dark'
      />

      <Button
        onClick={() => mutation.mutate({ todo: { title } })}
        mt='6'
        colot='gray.dark'
        bgColor='yellow.default'
        _hover={{ bgColor: 'yellow.dark' }}
        _active={{ bgColor: 'yellow.light' }}
      >
        Add New Todo
      </Button>

    </Box>
  )
};

export default AddTodoButton;