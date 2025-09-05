import {  View, Image, StyleSheet, Text } from 'react-native'
import { Header } from '../../Components/Header/index'
import bg from '../../assets/images/bg.png';


export const Cadastro = () => {
    return (
        <>
        <View>
          <Header/>
            <Image source={bg} style={styles.img}/> {/* Imagem de Fundo */}
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
})