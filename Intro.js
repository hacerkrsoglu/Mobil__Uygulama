import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native-web'

const Intro = () => {
  return (
    <View style={styles.container}>
       <Text style={styles.text}>Merhaba hecere</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'darkorange',
   
  },
  text: {
    fontSize: 40, // Metin öğesinin font boyutunu 40 olarak ayarlayın
    color : 'white',
  }
  
});
export default Intro