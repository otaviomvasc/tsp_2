import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';

let txt;
export default function (props){
    txt = props.teste
    return (
        <Text style={estilos.txt1}> Olá Mundo ---- Teste {props.teste} e também {props.teste2}
        </Text>

    )
}

const estilos = StyleSheet.create({
    txt1: {
        fontSize: 20
    },
    txt2: {
        color: '#00f'
    }

})