import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function (props){
    let aux1 = props.exibir
    if(aux1 == true){
        return (
            <View> 
                <Text> TITULO DO APP!!!!</Text>
            </View>
        )} else {
            return (
                <View>
                    <Text> TITULO 02 DO APP!!!</Text>
                </View>
            )
        }
}