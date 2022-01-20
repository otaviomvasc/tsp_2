import React , {useState} from 'react'
import {View, StyleSheet, Text, TextInput, Button} from 'react-native'
import Btn from './btn_salvar'
import AS from '@react-native-async-storage/async-storage';

export default function (){
    const [ends, setEnds ] = useState([])
    const [id, setID] = useState(0)
    const [name,setName] = useState(null)
    var lista = []
    const altera_texto = text => {
        setName(text);
        // console.log(user)
    } 
    const salvar = async () => {
        const user = {name:name}
        await AS.setItem('user', JSON.stringify(user))
    }
    
    const salvar2 = async () => {
        setID(id+1)
        const id_correto = JSON.stringify(id)
        const enderecos = {id_correto, name}
        console.log(enderecos)
        await AS.setItem(id_correto, JSON.stringify(name))
    }
    const teste = async () => {
        for (let i = 0;i<6; i++) { 
            const value = await AS.getItem(JSON.stringify(i))
            console.log(JSON.parse(value))
            lista.push(
                
                    value
                
            )

        }
        console.log(lista)  
        return lista

    }  
     
        
    AS.clear()

    return (
        <View> 
            <Text> Digite o Endereço</Text>
            <TextInput
            placeholder = 'Digite o Endereço aqui'
            value = {name}
            onChangeText ={altera_texto}/>
           {/* {user.trim().lenght > 3 ?   <Btn /> : null}  */}
           <Button 
            title = 'Adicionar Endereço'
            onPress ={salvar2}/>
            <Button 
            title = 'Teste Mostrar'
            onPress = {teste}
            />
            <Text>{lista}</Text>
            
        </View>
    )
}

// const style = StyleSheet.create(
//     {
//         txt_input


//     }

// )
