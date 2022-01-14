 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import React, { useState }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import C1 from "./componentes/comp1"
import C2 from "./componentes/comp2"
import Titulo from "./componentes/titulo.js"
import FL from "./componentes/listaPlana.js"
// import Estilos from "./estilos/estilos.js"
import Carros from "./componentes/botao2"
import Carros2 from "./componentes/carrosF"
import Caixa from "./componentes/caixa_texto"
import AS from '@react-native-async-storage/async-storage';


export default function App() {
    const [curso, setCurso] = useState(null)
    const [end, setEnd] = useState(null)
    const [cont, setCont] = useState(3)

    const armazenar =  (key,valor) => {
      AS.setItem(key,valor)
    }

    const Buscar = async (key) => {
      const valor  = await AS.getItem(key)
      setCurso(valor)
      
    }

    const Mostrar = async () => {
      return (<View> 
        <Text>  </Text>
      </View>
      )
    }

    function Soma_cont() {
      setCont(cont+1)
      return ('0${cont}')

    }
    armazenar('01', 'Oi 1')
    armazenar('02', 'Oi 2')
    armazenar('3', 'Oi 3')
     
    Buscar(cont.toString())

  return (
    
          <View style = {styles.container}> 
            <Text>OTIMIZADOR DE ROTAS V_0 </Text>
            <TextInput
            style ={{borderWidth: 1 , borderColor : '#000'}}
            value = {end}
            onChange = {(end) => setEnd(end)} />
            <Button 
            title = 'Inserir Endereço'
            onPress = {Soma_cont, armazenar(cont,end)}
            />
            <Text>{curso}</Text>
            <Text> {cont}</Text>
            <Button 
            title = 'zerar lista'
            onPress = {()=> AS.clear()}
            />
          </View>
      
  // 
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
