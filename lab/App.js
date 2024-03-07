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
      <View style={styles.box1}>
        <Text style={styles.text}>A</Text>
      </View>
        <View style={styles.container2}>
            <View style={styles.box2}>
                <Text style={styles.text}>B</Text>
            </View>
            <View style={styles.box3}>
                <Text style={styles.text}>C</Text>
            </View>
            <View style={styles.box4}>
                <Text style={styles.text}>D</Text>
            </View>
            </View>
      <View style={styles.box5}>
        <Text style={styles.text}>E</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column',
      backgroundColor:'white',
      alignItems:'stretch',
      justifyContent:'center'
    },
    container2:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'stretch',
        justifyContent:'center'
      },
    box1:{
      flex:1,
      backgroundColor:'grey',
      justifyContent:'center',
      alignItems:'center'
    },
    box2:{
      flex:1,
      backgroundColor:'darkwhite',
      justifyContent:'center',
      alignItems:'center'
    },
    box3:{
      flex:1,
      backgroundColor:'darkblue',
      justifyContent:'center',
      alignItems:'center'
    },
    box4:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
      },
    box5:{
        flex:1,
        backgroundColor:'darkred',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
      fontSize:30
    }

})

export default App
//resizeMOde : 'cover' 
//bir görüntünün bir bileşen içinde nasıl boyutlandırılacağını belirten bir özelliktir. 
//Bu özellik, görüntünün bileşenin boyutlarına sığacak şekilde orantılı olarak boyutlandırılmasını sağlar ve 
//görüntünün bileşenin tamamını kaplamasını sağlar. Görüntü, bileşenin boyutlarına uymak için gerektiğinde kırpılabilir, ancak oranlar bozulmadan korunur. 
//Bu sayede görüntü, bileşenin tüm alanını kaplayacak şekilde en iyi şekilde uyum sağlar.