import { Image, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


const InputLogin = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginTop: 20
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                width: 50,
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                elevation: 3
            }}>
                <Icon name={props.icon} size={30} color="#bdbdbd" />
            </View>
            <TextInput value={props.state} style={{
                backgroundColor: '#ffffff',
                // marginHorizontal: 20,
                // borderRadius: 15
                flex: 1,
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                paddingVertical: 15,
                elevation: 3,
                paddingLeft:10
            }} placeholder={props.placeholder}
                onChangeText={text => props.set(text)}
                secureTextEntry={props.isPassword}
            />
        </View>
    )
}

export default InputLogin