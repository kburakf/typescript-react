import { IconButton } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { useHistory } from "react-router";

const NewTodoButton: React.FC = () => {
  const history = useHistory();

  return (
    <IconButton
      onClick={() => history.push('/new')}
      color='gray.dark'
      bgColor='yellow.default'
      borderRadius='100%'
      aria-label='add-new-todo'
      size='lg'
      p='4px'
      pos='absolute'
      left='calc(50% - 24px)'
      _hover={{ bgColor: 'yellow.dark' }}
      _active={{ bgColor: 'yellow.light' }}
      as={FiPlus}
    />
  )
};

export default NewTodoButton;