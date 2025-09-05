import { View, StyleSheet, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Feather name="corner-up-left" size={30} color="white" style={styles.icon}/>
      <Text style={styles.text}>TELA INICIAL</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    top: 0,
    height: "40px",

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
    alignItems: 'center'
  },
  text: {
    marginTop: 7,
    fontSize: 17,
    color: 'white',
    marginLeft: 5,
    alignItems: 'center'
  }
});
