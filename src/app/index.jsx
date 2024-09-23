// Import libraries
import { View, Text } from "react-native";

// Import files
import React, { useReducer } from "react";
import reducer, { initialState } from "./reducer";

// Import components
import Inventory from "./Inventory";
import Profile from "./Profile";
import LearnList from "./LearnList";
import EtudeState from "./EtudeState";
import ColorPicker from "./ColorPicker";
import Todo from "./Todo";

const index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addTodo(newTodo) {
    dispatch({ type: "addTodo", payload: newTodo });
  }

  return (
    <View>
      {/* <Inventory /> */}
      {/* <Profile /> */}
      {/* <LearnList /> */}
      {/* <EtudeState /> */}
      {/* <ColorPicker /> */}
      <Todo todos={state.todos} addTodo={addTodo} />
    </View>
  );
};

export default index;
