import React,{ useState } from 'react'
import {  View, Image, StyleSheet, TextInput, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Header } from '../../Components/Header/index'
import bg from '../../assets/images/bg.png';


export const Cadastro = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const lidarCadastro = () => {
    console.log({nome, email, celular, password, confirmPassword});
    
  }


    return (
        <>
        <View>
          <Header/>
            <Image source={bg} style={styles.img}/> {/* Imagem de Fundo */}
          <View>  {/*Formulário*/}
            <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.scroll}>
              <Image
              {/*Imagem da logo do cliente*/}
              /> 
              <Text>Nome</Text>            
              <TextInput
                style={styles.nome}
                placeholder='Sua Barbearia'
                value={name}
                onChange={setName}
              />

              <Text>Email</Text>
              <TextInput
                style={styles.email}
                placeholder='SuaBarbearia@gmail.com'
                keyboardType='email-address'
                autoCapitalize='none'
                value={email}
                onChangeText={setEmail}
              />

              <Text>Celular</Text>
              <TextInput
                style={styles.celular}
                placeholder='(00) 00000-0000'
                keyboardType='phone-pad'
                value={celular}
                onChangeText={setCelular} 
              />

              <Text>Senha</Text>
              <TextInput
                style={styles.senha}
                placeholder='Digite Sua Senha'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />

              <Text>Confirme Sua Senha</Text>
              <TextInput
                style={styles.confirmSenha}
                placeholder='Confirme Sua Senha'
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />

              <TouchableOpacity style={styles.button} onPress={lidarCadastro}>
                <Text style={styles.cadastrar}>CADASTRAR</Text>
              </TouchableOpacity>
            </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </View>
       </>
    )
}


const styles = StyleSheet.create ({
  img: {
    width: '100%',
    height: '715px',
    position: "absolute",
    zIndex: '-3',
  },
  scroll: {

  }
})