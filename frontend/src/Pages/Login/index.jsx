import React, { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    Image, 
    Text, 
    TouchableOpacity,
    Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Navegação entre telas
import { Button } from "../../Components/Button";
import Logo from "../../assets/images/Logo.png";
import { Inputs } from "../../Components/Inputs";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Para guardar o token

export const Login = () => {
  const navigation = useNavigation(); // HOOK para navegar
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState(""); // Estados para guardar email e senha

  const handleLogin = async () => {

    try {
        const response = await fetch("http://SEU_BACKEND_URL/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, passWord: passWord })
        });

        if (!response.ok) {
            Alert.alert("Erro", "Credenciais Inválidas");
            return;
        }

        const data = await response.json();
        await AsyncStorage.setItem("token", data.token); // Salvar token JWT
        
        navigation.navigate("Home"); // Navegar para a tela Home
    } catch (error) {
        console.error(error);
        Alert.alert("Erro", "Não foi possível conectar ao servidor");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.logoContainer}>
            <Image source={Logo} style={styles.logo} />
          </View>
          <View>
            <Inputs
              placeholder={"E-mail"}
              bgColor={"#424559"}
              width={"100%"}
              height={56}
            />
            <Inputs
              placeholder={"Senha"}
              bgColor={"#424559"}
              width={"100%"}
              height={56}
            />
            <Button title="Entrar" onPress={handleLogin} />
          </View>

          <View style={styles.optionsContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Esqueci a Senha")}
            >
              <Text style={{ color: "#EAEAEA", fontSize: 17 }}>
                Esqueci a Senha
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Criar Conta")}
            >
              <Text style={{ color: "#EAEAEA", fontSize: 17 }}>
                Criar Conta
              </Text>
            </TouchableOpacity>
          </View>
          {/* Fim container options */}
        </View>
        {/* Fim container form */}
      </View>
      {/* Fim container principal */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#272936",
    justfyContent: "center",
    alignItems: "center",

    paddingLeft: 30,
    paddingRight: 30,
  },
  form: {
    paddingTop: 90,
    width: 300,
    height: 200,
    JustifyItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 15,
    borderRadius: 12,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#EAEAEA",
    fontSize: 18,
  },
});
