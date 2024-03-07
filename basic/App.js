import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'});
  const formattedDateLong = currentTime.toLocaleDateString('tr-TR', {year: 'numeric', month: 'long', day: 'numeric'});
  const formattedWeekday = currentTime.toLocaleDateString('tr-TR', {weekday: 'long'});
  const isDarkMode = currentTime.getHours() >= 12;
  const backgroundImage = isDarkMode
    ? 'https://png.pngtree.com/thumb_back/fw800/background/20230414/pngtree-sunny-weather-in-autumn-park-in-the-afternoon-photo-image_2441099.jpg'
    : 'https://i.pinimg.com/236x/a3/f4/41/a3f441d9196927804f9ab3e072550a74.jpg';

  return (
    <ImageBackground
      source={{uri: backgroundImage}}
      style={[styles.imageBackground, {backgroundColor: isDarkMode ? 'black' : 'white'}]}
    >
      <View style={styles.container}>
        <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>{formattedTime}</Text>
        <Text style={[styles.smallText, {color: isDarkMode ? 'white' : 'black'}]}>{formattedDateLong}</Text>
        <Text style={[styles.smallText, {color: isDarkMode ? 'white' : 'black'}]}>{formattedWeekday}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    borderWidth: 0,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'arial',
    fontSize: 60,
  },
  smallText: {
    fontSize: 20,
  }
});
