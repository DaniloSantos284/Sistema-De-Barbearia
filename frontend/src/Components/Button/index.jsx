import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


export const Button = () => { 

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.cadastrar}>CADASTRAR</Text>
              </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
container: {
  marginTop: 15,
  marginBottom: 15,
  width: '100%',
  height: 56,
  backgroundColor: '#10ace7',
  borderRadius: 12,
  padding: 10,
},
button: {
  alignItems: 'center',
  width: '100%',
},
cadastrar: {
  color: "white",
  fontSize: 25,
  
},
  })


  // Botão com estilo padrão e também com possibilidade de customização na cor, largura e altura.   
