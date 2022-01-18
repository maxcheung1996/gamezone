import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={style.container}>
      <Text>About Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 24,
  },
});
