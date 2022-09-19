import React from 'react'
import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import { useState } from 'react'
//auto generate id
import { nanoid } from 'nanoid';

function AddTodo({ addTodo }) {

  /**the toast component is used to give feedback to users
  after an action has taken place */ 
  const toast = useToast()

  function handleSubmit(e) {
    e.preventDefault();
    
    // if there is no content display this
    if (!content) {
      toast({
        title: 'No Content',
        status: 'error',
        duration: 2000,
        isClsable: true,
      });
      return
    }

    const todo = {
      id: nanoid(),
      body: content,
    }
    addTodo(todo);
    setContent('');
  }

  const [content, setContent] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='8'>
        <Input
          variant='filled'
          placeholder='learning chakraui with todo app'
          value={content} onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme='pink' px='8' type='submit'>
          Add Todo
        </Button>
      </HStack>
    </form >
  )
}

export default AddTodo