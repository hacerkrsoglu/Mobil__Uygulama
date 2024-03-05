import { ImageBackground, StyleSheet, Text, View } from "react-native";

function TimeWidget (){
  const  currenTime= new Date(); 


  return (
    <ImageBackground 
      source = {{uri:'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
      resizeMode ="cover"
      imageStyle = {{
        opacity:.9
      }}
    style = {styles.container}>
      <View style = {styles.container}>
        <Text style={styles.text}>
          {currenTime.getHours()}: {String(currenTime.getMinutes()).padStart(2,'0')}
        </Text>
      </View>
  </ImageBackground>)
}
const styles = StyleSheet.create({
  container:{
    flex :1,
    borderWidth :1,
    justifyContent:'center',
    alignItems : 'center' 

  },
  text: {
    fontSize: 60, // Metin öğesinin font boyutunu 40 olarak ayarlayın
    fontWeight:'bold'}
});
export default TimeWidget;