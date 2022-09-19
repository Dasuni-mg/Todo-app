import { Heading, VStack, IconButton,useColorMode } from "@chakra-ui/react";
import ToDoList from "./components/ToDoList";
import AddTodo from "./components/AddTodo";
import { FaSun } from "react-icons/fa";
import { useState } from "react";

function App() {

  //initial array
  const initialTodos = [
    {
      id: 1,
      body: 'Get bread'
    },
    {
      id: 2,
      body: 'Get butter'
    },
    {
      id: 3,
      body: 'Get sugar'
    }
  ];

  const [todos, setTodos]=useState(initialTodos);

  function deleteTodo(id){
    const newTodos=todos.filter((todo)=>{
      return todo.id !== id;
    });
    setTodos(newTodos);
  }
//(... spread operator-copy all part of an existing array or object into another array or object)
  function addTodo(todo){
  setTodos([...todos,todo]);
  }

//useColorMode hook of chakra UI
  const{colorMode,toggleColorMode} = useColorMode()

  return (
    <div className="App">
      <VStack p={8}>
        <IconButton
          icon={<FaSun />}
          isRound="true"
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
        <Heading
          p="8"
          fontWeight="extrabold"
          size="2xl"
          bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
          bgClip="text"
        >
          To Do Application
        </Heading>
        <ToDoList todos={todos} deleteTodo={deleteTodo}></ToDoList>
        <AddTodo addTodo={addTodo}></AddTodo>
      </VStack>
    </div>
  );
}

export default App;
