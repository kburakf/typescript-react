import { Box, Text, Input, Button, Flex } from '@chakra-ui/react'
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import client from '../utils/client';

const LoginTodo: React.FC = () => {
  const history = useHistory();
  const token = localStorage.getItem('token');
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('');


  // if (token) {
  //   history.push('/todos')
  // }

  localStorage.removeItem('token')

  const mutation = useMutation((
    loginInfo: { username: string, password: string },
  ) =>
    client
      .post('user/login', loginInfo)
      .then((response: { data: any; }) => {
        const { data: { status, message, token } } = response;
        console.log(response.data)
        if (status === 404) {
          alert(message)
        }

        if (token) {
          localStorage.setItem('token', token);
          history.push('/todos')
        }
      }));

  return (
    <Box mt='24'
      mx='auto'
    >
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
          <Text
            fontSize='16px'
            fontWeight='bold'
            color='gray.default'
          >
            Username
          </Text>

          <Input
            value={username}
            width='300px'
            onChange={(e) => setUsername(e.target.value)}
            bgColor='white'
          />

          <Text
            fontSize='16px'
            fontWeight='bold'
            color='gray.default'
          >
            Password
          </Text>

          <Input
            value={password}
            type='password'
            width='300px'
            onChange={(e) => setPassword(e.target.value)}
            bgColor='white'
          />

          <Flex
            alignItems='center'
            justifyContent='space-between'
            experimental_spaceX='4'
            pos='relative'
          >
            <Button
              onClick={() => mutation.mutate({ username, password })}
              mt='6'
              color='white'
              bgColor='green.forest'
              _hover={{ bgColor: 'green.lime' }}
              disabled={!username || !password}
              p='20px'
              width='300px'
            >
              Login
            </Button>
          </Flex>

          <Text
            fontSize='16px'
            fontWeight='bold'
            color='gray.default'
            left='25px'
            pos='relative'
          >
            Not registered yet? Let's join us!
          </Text>

          <Button
            onClick={() => history.push('/signup')}
            mt='6'
            color='white'
            bgColor='blue.bright'
            _hover={{ bgColor: 'blue.baby' }}
            p='20px'
            width='300px'
          >
            Sign Up
          </Button>
        </Box>
      </Flex >
    </Box >
  );
};

export default LoginTodo;