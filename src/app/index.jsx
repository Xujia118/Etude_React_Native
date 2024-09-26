// Import libraries
import { View, Text } from "react-native";

// Import files
import React, { useReducer } from "react";
import reducer, { initialState } from "./reducer";

// Import components
import Todo from "./Todo";
import Users from "./Users";

const index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Todo component
  function addTodo(text) {
    dispatch({ type: "addTodo", payload: text });
  }

  function deleteTodo(id) {
    dispatch({ type: "deleteTodo", payload: id });
  }

  function updateTodo({ id, text }) {
    dispatch({ type: "updateTodo", payload: { id, text } });
  }

  // Users component
  function addUser({ name, age }) {
    dispatch({ type: "addUser", payload: { name, age } });
  }

  function deleteUser(id) {
    dispatch({ type: "deleteUser", payload: id });
  }

  function updateUser({ id, name, age }) {
    dispatch({ type: "updateUser", payload: { id, name, age } });
  }

  return (
    <View>
      {/* <Todo
        todos={state.todos}
        addTodo={addTodo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      /> */}
      <Users
        users={state.users}
        addUser={addUser}
        deleteUser={deleteUser}
        updateUser={updateUser}
      />
    </View>
  );
};

export default index;
