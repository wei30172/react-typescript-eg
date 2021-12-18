import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Heading from './components/Heading'
import Container from './components/Container';
import Input from './components/Input';
import Button from './components/Button';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import Box from './components/context/Box';
import User from './components/context/User';
import { Counter } from './components/class/Counter';

function App() {
  return (
    <div className="App">
      <Heading>Title</Heading>
      <Container styles={{background: '#000', color: '#fff'}}>
        <Heading>content</Heading>
      </Container>
      <Greet name="claire" msgCount={10}></Greet>
      <Input value='' handleChange={(e) => console.log(e.target.value)}></Input>
      <Button handleClick={(e, id) => {console.log('button clicked!',id , e)}}></Button>
      <ThemeContextProvider><Box /></ThemeContextProvider>
      <UserContextProvider><User /></UserContextProvider>
      <Counter msg='The count value is'/>
    </div>
  );
}

export default App;
