import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge } from '@chakra-ui/react';
import React from 'react'
import { FaTrash } from 'react-icons/fa'

function ToDoList({todos,deleteTodo}) {
 
  if(!todos.length){
    return(
      <Badge colorScheme='green'p={4} m={4}>No Todos, yay!!!</Badge>
    )
  }

  return <VStack
    divider={<StackDivider />}
    borderColor='gray.100'
    borderWidth='2px'
    p='4'
    borderRadius='lg'
    w='100%'
    maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
    alignItems='stretch'
  >
   
   
   {/**map every todo element with a hstack */}
    {todos.map((todo) => (
      <HStack key={todo.id}>
        <Text>{todo.body}</Text>
        <Spacer />
        <IconButton
          icon={<FaTrash />}
          isRound='true'
          onClick={()=> deleteTodo (todo.id)}
        />
      </HStack>
    ))}
  </VStack>
}

export default ToDoList