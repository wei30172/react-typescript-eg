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
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generic/List';
import RandomNumber from './components/restriction/RandomNumber';
import Toast from './components/templateliterals/Toast';
import CustomButton from './components/html/Button';
import CustomInput from './components/html/Input';
import Text from './components/polymorphic/Text'

function App() {
  return (
    <div className="App">
      {/* Typing Props */}
      <Greet name="claire" msgCount={10}></Greet>
      
      {/* Advanced Props & Style Props*/}
      <Heading>Title</Heading>
      <Container styles={{background: '#000', color: '#fff'}}>
        <Heading>content</Heading>
      </Container>
      
      {/* Event Props */}
      <Input value='' handleChange={(e) => console.log(e.target.value)}></Input>
      <Button handleClick={(e, id) => {console.log('button clicked!',id , e)}}></Button>
      
      {/* useContext Hook */}
      <ThemeContextProvider><Box /></ThemeContextProvider>
      <UserContextProvider><User /></UserContextProvider>
      
      {/* Class Component */}
      <Counter msg='The count value is'/>
      
      {/* Component Prop */}
      <Private isLoggedIn={true} componemt={Profile}/>

      {/* Generic Props */}
      <List
        items={['items1', 'items2', 'items3']}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      />
      {/* <List
        items={[
          { 
            id: 1,
            name: 'claire'
          },
          {
            id: 2,
            name: 'amy'
          }
        ]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* Restricting Props */}
      <RandomNumber
        value={10}
        isPositive
      />

      {/* Template Literals */}
      <Toast position='left-center' />
      <Toast position='center' />

      {/* Wrapping HTML Elements */}
      <CustomButton
        variant='primary'
        onClick={() => console.log('Clicked')}>
        Primary Button
      </CustomButton>
      <CustomInput onChange={(e) => console.log(e.target.value)} />

      {/* Polymorphic Components */}
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' size='sm' color='secondary'>Label</Text>
    </div>
  );
}

export default App;
