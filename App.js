import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import React, { Component, useState, useEffect }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AS from '@react-native-async-storage/async-storage';
import Intro from './componentes_CRUD/intro'



export default function App() {
    const findUser = async () => {
      const result = await AS.getItem('user')
      console.log(result);

  }
    useEffect (() => {
      findUser()
    }, [])

    
  return (
    <>
      <View style  = {styles.container}>
        <Intro/> 
      </View>
    </>
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
