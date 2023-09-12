import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [valorLitro, setvalorLitro] = useState ('')
  const [quantidadeAbastecida, setquantidadeAbastecida] = useState ('')
  const [kmRodado, setkmRodado] = useState ('')
  const [resultado, setvalorResultado] = useState ('')

  const buscarValor = () => {
    let litroValor = parseFloat(valorLitro, 5.52)

  }






  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gasto de Combustível</Text>
      <View>
        <Text style={styles.title}>Valor do Litro</Text>
        <TextInput style={styles.input} keyboardType="numeric"/>
      </View>
      <View>
        <Text style={styles.title}>Quantidade Abastecida</Text>
        <TextInput style={styles.input} keyboardType="numeric"/>
      </View>
      <View>
        <Text style={styles.title}>Kilômetros Rodados</Text>
        <TextInput style={styles.input} keyboardType="numeric"/>
      </View>
      <View>
        <Pressable style={styles.pressable}><Text>Calcular</Text></Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
  },

  input: {
    color: '#fff',
    height: 40,
    width: 200,
    textAlign: 'center',
  },
  pressable: {
    width: 200,
    height: 40,
    paddingBottom: 10,
    backgroundColor: '#00FA9A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  laResultado: {
    color: '#fff',
  }
});
