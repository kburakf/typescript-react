import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NewTodo, Todos } from './components'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/new'>
            <NewTodo />
          </Route>

          <Route path='/'>
            <Todos />
          </Route>
        </Switch >
      </Router >
    </ChakraProvider>
  );
};

export default App;
