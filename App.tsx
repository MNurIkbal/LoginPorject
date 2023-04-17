import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import InputLogin from './src/components/InputLogin';


const App = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  return (
    <View style={{ flex: 1, backgroundColor: '#dbe4f3' }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#dbe4f3"} />
      <View style={{
        // justifyContent:'center',
        // alignItems:'center',
        marginTop:120
      }}>
        <Logo />
        <InputLogin email={Email} state={setEmail} icon="envelope" placeholder="Masukan Email Anda..." isPassword={false} />
        <InputLogin email={Password} set={setPassword} icon="lock" placeholder="Masukan Password Anda..." isPassword={true} />
        <TouchableOpacity style={{
          marginTop: 20,
          paddingVertical: 14,
          backgroundColor: '#2396F2',
          marginHorizontal: 20,
          borderRadius: 15,
          elevation: 2
        }}>
          <Text style={{
            color: '#ffffff',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize:23,
            fontFamily:'Arial'
          }}>Login</Text>
        </TouchableOpacity>
        <View style={{
          marginTop: 10,
          flexDirection: 'row',
          marginHorizontal: 20
        }}>
          <TouchableOpacity style={{
            flex: 1,
            marginTop:20
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize:17,
              fontFamily:'Arial'
            }}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            flex: 1,
            marginTop:20
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize:17,
              fontFamily:'Arial'
            }}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const Logo = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./src/assets/img/icon.png')} style={{ width: 250, height: 250 }} />
      <Text style={{ fontSize: 25, fontFamily: 'Arial', fontWeight: 'bold', color: '#2396F2' }}>Early Warning System</Text>
      <Text style={{ marginTop: 10, fontWeight: 'bold',fontSize:20 }}>Login</Text>
    </View>
  )
}


export default App

const styles = StyleSheet.create({})