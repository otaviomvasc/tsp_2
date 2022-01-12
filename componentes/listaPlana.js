import React from 'react'
import {Text, View, FlatList, StyleSheet } from 'react-native';

let produtos = [
    {id: '001', desc: ['mouse' , '150'] }, 
    {id: '002', desc: ['teclado' , '350'] }, 
    {id: '003', desc: ['tela' , '550'] }, 
]


export default function (){
    return (
        <View style = {estilo.container}> 
           <FlatList
                data = {produtos}
                keyExtractor = {item=>item.id}
                renderItem = {({item}) => <Text> Item: {item.desc[0]} --- Valor: {item.desc[1]}</Text>}
           
           />
        </View>
    )
}

const estilo =  StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop: 10
    }
})