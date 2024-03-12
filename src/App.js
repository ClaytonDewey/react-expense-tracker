import { Main } from './components';
const { Container, Flex, Box } = require('@chakra-ui/react');

function App() {
  return (
    <Container bg={'#f8fafd'} maxW={'Container.3xl'} height={'100vh'} p={'0'}>
      <Flex height={'full'}>
        <Box>
          <Main />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
