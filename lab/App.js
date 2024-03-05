import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

/*
const App = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.box1}>
        <Text style = {styles.text1}>Header</Text>
      </View>
      <View style = {styles.box2}>
        <Text style = {styles.text2}>Body</Text>
      </View >
      <View style = {styles.box3}>
        <Text style = {styles.text3}>Footer</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        backgroundColor:'white',
        alignItems: 'stretch',
        justifyContent: 'center',

    },
    box1:{
        flex:1,
        backgroundColor:'lightblue',
        justifyContent: 'center',//y ekseninde
        alignItems:'center'//x ekseninde
        
    },
    box2:{
        flex:2,
        backgroundColor:'blue',
        justifyContent: 'flex-start',
        alignItems:'center',
        flexDirection: 'column',

    },
    box3:{
        flex:1,
        backgroundColor:'yellow',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',


    },
    text1:{
      color:'black',
      fontSize:20

    },
    text2:{
      color:'black',
      fontSize:20
    },
    text3:{
      color:'black',
      fontSize:20
    },
})
*/

const App = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.box1}>
        <Text>1</Text>
      </View>
      <View style = {styles.box2}>
        
        <View style = {[styles.column, {backgroundColor: 'pink'}]}>
          <Text>2.1</Text>
        </View>
        <View style = {[styles.column, {backgroundColor: 'white'}]}>
          <Text>2.2</Text>
        </View>
        <View style = {[styles.column, {backgroundColor: 'gray'}]}>
          <Text>2.3</Text>
        </View>
      </View >
     
      
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      flex: 1,
      flexDirection:'column',
      backgroundColor:'white',
      alignItems:'stretch',
      justifyContent: 'center',

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

})

export default App