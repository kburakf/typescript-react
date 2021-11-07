import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom"
import client from "../utils/client";

const Signup: React.FC = () => {
  const history = useHistory();
  const token = localStorage.getItem('token');

  if (token) {
    history.push('/todos')
  }

  const [name, setName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('');

  const mutation = useMutation((
    loginInfo: {
      name: string,
      surname: string,
      username: string,
      email: string,
      password: string
    },
  ) =>
    client
      .post('user', loginInfo)
      .then(response => {
        const { data: { status, message, token } } = response;
        console.log(response.data)
        if (status === 404) {
          alert(message)
        }

        history.push('/login')
      }));

  return (
    <Box
      mt='24'
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
          experimental_spaceY='3'
        >
          <Text
            fontSize='16px'
            fontWeight='bold'
            color='gray.default'
          >
            Name
          </Text>

          <Input
            value={name}
            width='300px'
            onChange={(e) => setName(e.target.value)}
            bgColor='white'
          />

          <Text
            fontSize='16px'
            fontWeight='bold'
            color='gray.default'
          >
            Surname
          </Text>

          <Input
            value={surname}
            width='300px'
            onChange={(e) => setSurname(e.target.value)}
            bgColor='white'
          />
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
            E-mail
          </Text>

          <Input
            value={email}
            width='300px'
            onChange={(e) => setEmail(e.target.value)}
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
              onClick={() => mutation.mutate({ name, surname, username, email, password })}
              mt='6'
              color='white'
              bgColor='blue.bright'
              _hover={{ bgColor: 'blue.baby' }}
              disabled={!name || !surname || !username || !email || !password}
              p='20px'
              width='300px'
            >
              Create
            </Button>

          </Flex>
          <Text
            fontSize='16px'
            fontWeight='bold'
            color='gray.default'
            left='25px'
            pos='relative'
          >
            Do you already have an account?
          </Text>

          <Button
            onClick={() => history.push('/login')}
            mt='6'
            color='white'
            bgColor='green.forest'
            _hover={{ bgColor: 'green.lime' }}
            p='20px'
            width='300px'
          >
            Login
          </Button>
        </Box>
      </Flex >
    </Box >
  )
};

export default Signup;