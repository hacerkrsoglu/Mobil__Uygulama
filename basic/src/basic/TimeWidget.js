import { ImageBackground, StyleSheet, Text, View } from "react-native";

function TimeWidget (){
  const  currentTime = new Date(); 
  const formattedDate = currentTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});


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
         {formattedDate}
        </Text>
      </View>
  </ImageBackground>);
}
const styles = StyleSheet.create({

  imageBackground : {
    flex : 1,
    resizeMode: 'cover', //veya 'stretch gibi farklı resizemodelerini kulanabiliriz.'
  },
  container:{
    flex :1,
    borderWidth :0,
    borderColor : 'black',
    flexDirection: 'row',
    //backGroundColor : 'white' arkaplan rengini ve opaklığı ayarlayabiliriz.
    justifyContent:'center',
    alignItems : 'center' 

  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'arial',
    fontSize: 60, // Metin öğesinin font boyutunu 40 olarak ayarlayın
    }
});
export default TimeWidget;
// {currentTime.getHours()}: {String(currentTime.getMinutes()).padStart(2,'0')} bunu yazmıştık textin oraya