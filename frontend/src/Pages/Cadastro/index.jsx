import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Header } from "../../Components/Header/index";
import bg from "../../assets/images/bg.png";
import logo from "../../assets/images/logo.jpg";

export const Cadastro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const lidarCadastro = () => {
    console.log({ name, email, celular, password, confirmPassword });
  };

  return (
    <>
      <Image source={bg} style={styles.img} /> {/* Imagem de Fundo */}
      <Header style={styles.header} />
      <View style={styles.container}>
        <View style={styles.scroll}>
          <View style={styles.logoCotainer}>
              <Image source={logo} style={styles.logo} />
            </View>
          {" "}
          {/*Formulário*/}
          <KeyboardAvoidingView contentContainerStyle={styles.scroll}>
            <ScrollView style={styles.body}>
              <Text style={styles.form}>Nome</Text>
              <TextInput
                style={styles.input}
                placeholder="Sua Barbearia"
                value={name}
                onChange={setName}
              />

              <Text style={styles.form}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="SuaBarbearia@gmail.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />

              <Text style={styles.form}>Celular</Text>
              <TextInput
                style={styles.input}
                placeholder="(00) 00000-0000"
                keyboardType="phone-pad"
                value={celular}
                onChangeText={setCelular}
              />

              <Text style={styles.form}>Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite Sua Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />

              <Text style={styles.form}>Confirme Sua Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirme Sua Senha"
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
  );
};

const styles = StyleSheet.create({
  img: {
    // Imagem de Fundo
    width: "100%",
    height: 715,
    position: "absolute",
    zIndex: "-3",
  },
  header: {
    // colocar estilos do header aqui se necessário
  },
  container: {
    flex: 1,
  },
  logoCotainer: {
    alignItems: "center",
  },
  logo: {
    // Imagem da logo do cliente
    width: 100,
    height: 100,
    borderRadius: 20,
    marginTop: 5
  },
  scroll: {
    flex: 1,
  },
  body: {
    padding: 20,
  },
  form: {
    color: "white",
    fontSize: 25,
    marginTop: 10,
    fontWeight: "bold",
  },
  input: {
    fontSize: 20,
    color: "white",

    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  button: {
    alignItems: "center",
    marginTop: 15
  },
  cadastrar: {
    color: "white",
    fontSize: 25,
    marginTop: 10,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
});
