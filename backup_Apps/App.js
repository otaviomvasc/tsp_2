 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React, { useState }  from 'react';
import C1 from "./componentes/comp1"
import C2 from "./componentes/comp2"
import Titulo from "./componentes/titulo.js"
import FL from "./componentes/listaPlana.js"
// import Estilos from "./estilos/estilos.js"
import Botao2 from "./componentes/botao2"

function vexibir(vp1){
  if (vp1){
    return (
      <Text>Funciona pelo AMOR DE DEUS </Text>
    )
  }else {
    return (
      <Text>----------------------------------------- </Text>
    )
  }

}

function dobro (n) {
  return n*2
}

function setLigado(){

}

export default function App() {
  let aexibir = true;
  const [ligado,setLigado] = useState(true)
  ligado 
  return (
          <View style = {styles.container}> 
            <Button title = 'teste' onPress = {() => setLigado(!ligado)} />    
            {ligado?
              <View> 
                <C1/>
                <C2/> 
              </View>
              :
              <View style ={styles.cont}> 
                <Text> * * * * * * * * * </Text>
                <FL/>
              </View>
          }

          </View>


          // <View 
          //   {ligado?
          //     <View style={styles.container}>
          //       <Titulo exibir ={aexibir}/> 
          //       <C1 teste = "aaa" teste2 = "bdddbb"/> 
          //       <C2 teste = "aaa" teste2 = "bdddbb"/>  
          //       <FL/>
          //       <Button 
          //       title ="Clique aqui"
          //       onPress = {() => Alert.alert("Sim", "Tiao é Barrigudo")}
          //     </View>
          //   <Text>* * *</Text> 
          // </View>
      
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
