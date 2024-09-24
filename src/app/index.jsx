// Import libraries
import { View, Text } from "react-native";

// Import files
import React, { useReducer } from "react";
import reducer, { initialState } from "./reducer";

// Import components
import Todo from "./Todo";

const index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addTodo(text) {
    dispatch({ type: "addTodo", payload: text });
  }

  function deleteTodo(id) {
    dispatch({ type: "deleteTodo", payload: id });
  }

  function updateTodo({ id, text }) {
    dispatch({ type: "updateTodo", payload: { id, text } });
  }

  return (
    <View>
      <Todo
        todos={state.todos}
        addTodo={addTodo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </View>
  );
};

export default index;
