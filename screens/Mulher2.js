import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Mulher2() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Lucas Moura</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});