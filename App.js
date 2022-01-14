 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import React, { Component, useState }  from 'react';
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


export default class App extends Component{
    // var loop = [];
    // for (let i = 0; i < 10; i++){
    //   loop.push( 
    //     <View key = {i} > 
    //     <Text> {i}</Text>
    //     </View>

    //   )

    // }
  constructor(props) {
    super(props);
      this.state = {
        txt_input : '',
        getValue : '',
        cont : 0,
        loop: []
      }
    }
  
    salvaEnd  = ()=> {
      let aux_cont = this.state.cont + 1
      this.setState({cont: aux_cont})
      AS.setItem(this.state.cont.toString(), this.state.txt_input)
      this.setState({txt_input : ''})
      // alert('Dado Salvo')
    }
    mostrarValor = () => {
      // this.state.loop = [];
      
          let teste = AS.getItem(i.toString())
          this.setState({getValue:teste})
          
        // this.state.loop.push (
        //   <Text>{this.state.getValue}</Text>
          
        // )      
      }

  

  render() {
    return (
      <View style = {styles.container}> 
      <TextInput 
      placeholder = "Digite o endereço"
      value = {this.state.txt_input}
      onChangeText = {end=> this.setState({txt_input: end})}
      />
      <Button 
      title = "Salvar endereço"
      onPress = {this.salvaEnd()}
      />
      <Text> {this.state.getValue}</Text>
      </View>
  
// 
);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
