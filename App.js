 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React, { useState }  from 'react';
import C1 from "./componentes/comp1"
import C2 from "./componentes/comp2"
import Titulo from "./componentes/titulo.js"
import FL from "./componentes/listaPlana.js"
// import Estilos from "./estilos/estilos.js"
import Carros from "./componentes/botao2"
import Carros2 from "./componentes/carrosF"
import Caixa from "./componentes/caixa_texto"


export default function App() {
  
  return (
          <View style = {styles.container}> 
            <Carros nome = 'teste' />
            <Text> Teste Lalalala</Text>
            <Carros nome = 'lalala'/>
            <Carros2 nome = 'Evoque'/>
            <Caixa/> 
          </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
