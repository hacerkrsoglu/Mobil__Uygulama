import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.box1}>
        <Text>1</Text>
      </View>
      <View style = {styles.box2}>
        <Text>2</Text>
      </View >
      <View style = {styles.box3}>
        <Text>3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        borderWidth:5,
        borderColor:'black'

    },
    box1:{
        flex:1,
        backgroundColor:'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box2:{
        flex:2,
        backgroundColor:'red',
        justifyContent: 'flex-start'
    },
    box3:{
        flex:0.5,
        backgroundColor:'pink',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

})

export default App