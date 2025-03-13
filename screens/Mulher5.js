import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Mulher5() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela de Início</Text>
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