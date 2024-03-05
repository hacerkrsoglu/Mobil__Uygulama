import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const Counter = () => {

    const [number, setNumber ]= React.useState(0); 
    const handleIncrease = () => {
        setNumber(number+1);
        console.log(number)

    }
    const handleDecrease = () => {
        setNumber(number-1);
        console.log(number)

    }
    const handleReset = () => {
        setNumber(0);
        console.log(number)

    }
  return (
    <View style = {styles.container}>
        <View style = {styles.numberContainer}>
            <Text style = {styles.text}>{number}</Text>
        </View>
        <View  style = {styles.buttonContainer}> </View>

      
      <Button title = "Artar" onPress={handleIncrease} />
      <Button title = "Azalt" onPress={handleDecrease}/>
      <Button title = "Sıfırla" onPress={handleReset}/>
    </View>
  )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth:5
    },
    numberContainer:{
        flex :1,
        backgroundColor:'darkorange',
        justifyContent: 'center',
        alignItems:'center'
    },

    buttonContainer: {
        justifyContent:'space-evenly',
        flexDirection:'row'
    },

    text:{
        fontSize:60,
        color: 'white'
    }

})

export default Counter;