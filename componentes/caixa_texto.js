import React, {useState} from "react";
import {Text, View, Button, TextInput} from 'react-native'

export default function () {
    const [texto, setTexto] = useState()
  
    return (
        <View> 
            <TextInput 
                style ={{borderWidth: 1 , borderColor : '#000'}}
                value = {texto}
                onChangeText = {texto => setTexto(texto)}
            />
        
            <Text> O Texto digitado foi {texto}</Text>

        </View>
    )
}