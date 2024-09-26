import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Users = ({ users, addUser, deleteUser, updateUser }) => {
  const [localName, setLocalName] = useState("");
  const [localAge, setLocalAge] = useState("");
  const [editingId, setEditingId] = useState("");

  function handleAddUser() {
    if (localName.trim() && localAge.trim()) {
      // TODO: Age check logic
      addUser({ name: localName, age: localAge });
      setLocalName("");
      setLocalAge("");
    }
  }

  function handleDeleteUser(id) {
    deleteUser(id);
  }

  function handleEditUser(id) {
    const currentUser = users.find((user) => user.id === id);
    if (currentUser) {
      setEditingId(id);
      setLocalName(currentUser.name);
      setLocalAge(currentUser.age);
    }
  }

  function handleUpdateUser(id) {
    if (localName.trim() && localAge.trim()) {
      updateUser({ id, name: localName, age: localAge });
      setLocalName("");
      setLocalAge("");
      setEditingId("");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder="Enter name..."
        value={localName}
        onChangeText={(text) => setLocalName(text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Enter age..."
        value={localAge}
        onChangeText={(text) => {
          setLocalAge(text);
        }}
      />

      {editingId ? (
        <Pressable
          style={({ pressed }) => [
            styles.addButton,
            pressed && styles.addButtonPressed,
          ]}
          onPress={() => handleUpdateUser(editingId)}
        >
          <Text style={styles.addButtonText}>Update</Text>
        </Pressable>
      ) : (
        <Pressable
          style={({ pressed }) => [
            styles.addButton,
            pressed && styles.addButtonPressed,
          ]}
          onPress={() => handleAddUser({ localName, localAge })}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      )}

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItemContainer}>
            <Text style={styles.userItem}>
              {item.name}, {item.age} years old
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => handleEditUser(item.id)}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteUser(item.id)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    margin: 40,
    padding: 20,

    display: "flex",
    alignItems: "center",
  },
  inputField: {
    marging: 10,
    marginBottom: 20,
    padding: 20,

    width: "100%",

    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,

    fontSize: 18,
  },
  addButton: {
    backgroundColor: "blue",
    padding: 20,
    width: "100%",
    borderRadius: 10,
  },
  addButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  addButtonPressed: {
    opacity: 0.7,
  },
  userItem: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  userItemContainer: {
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
