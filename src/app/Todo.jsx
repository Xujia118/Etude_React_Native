import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
} from "react-native";

const Todo = ({ todos, addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  function handleChange(text) {
    setNewTodo(text);
  }

  function handleSubmit() {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.inputField}
        value={newTodo}
        placeholder="Add a task..."
        onChangeText={handleChange}
      />
      <Pressable
        style={({ pressed }) => [
          styles.submitButton,
          pressed && styles.pressedButton,
        ]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Text style={styles.todoItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 40,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputField: {
    marginTop: 40,
    marginBottom: 40,
    padding: 20,

    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,

    fontSize: 20,
  },
  submitButton: {
    backgroundColor: "blue",

    padding: 20,
    paddingHorizontal: 40,

    borderRadius: 5,
  },
  pressedButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  todoItem: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

export default Todo;
