import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF"];

const ColorPicker = () => {
  const [picker, setPicker] = useState("");

  function selectColor(color) {
    setPicker(color);
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Pick a Color</Text>
        <View style={styles.circleContainer}>
          {colors.map((color) => (
            <TouchableOpacity
              key={color}
              style={[styles.circle, { backgroundColor: color }]}
              onPress={() => selectColor(color)}
            />
          ))}
        </View>
        <View style={[styles.result, { backgroundColor: picker }]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",

    marginBottom: 50,
  },
  circleContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "red",
  },
  result: {
    marginTop: 20,
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
});

export default ColorPicker;
