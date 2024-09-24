import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const Todo = ({
  todos,
  addTodo,
  updateTodo,
  deleteTodo,
}) => {
  const [localTodoText, setLocalTodoText] = useState("");
  const [editingId, setEditingId] = useState("");

  function handleChange(text) {
    setLocalTodoText(text);
  }

  function handleAddTodo() {
    if (localTodoText.trim()) {
      addTodo(localTodoText);
      setLocalTodoText("");
    }
  }

  function handleDeleteTodo(id) {
    deleteTodo(id);
  }

  function handleEditTodo(id) {
    // Updated button is rendered (by ternary operator)
    // The todo text to be edited is copied to input field
    const currentTodo = todos.find((todo) => todo.id === id);
    if (currentTodo) {
      setEditingId(id);
      setLocalTodoText(currentTodo.text);
    }
  }

  function handleUpdateTodo(id) {
    // Update local todo text
    // Update the todo text under this id in the todos list
    // editing Id is wiped
    if (localTodoText.trim()) {
      updateTodo({ id, text: localTodoText });
      setLocalTodoText("");
      setEditingId("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.inputField}
        value={localTodoText}
        placeholder="Add a task..."
        onChangeText={handleChange}
      />

      {editingId ? (
        <Pressable
          style={({ pressed }) => [
            styles.addButton,
            pressed && styles.pressedButton,
          ]}
          onPress={() => handleUpdateTodo(editingId)}
        >
          <Text style={styles.buttonText}>Update</Text>
        </Pressable>
      ) : (
        <Pressable
          style={({ pressed }) => [
            styles.addButton,
            pressed && styles.pressedButton,
          ]}
          onPress={handleAddTodo}
        >
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      )}

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItemContainer}>
            <Text style={styles.todoItem}>{item.text}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => handleEditTodo(item.id)}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
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
  addButton: {
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
  todoItemContainer: {
    padding: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  deleteButton: {
    color: "red",
    fontSize: 16,
  },
  editButton: {
    color: "green",
    fontSize: 16,
  },
});

export default Todo;
