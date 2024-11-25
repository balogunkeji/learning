import { Asset } from 'expo-asset';
import { StyleSheet, Image, Platform, SafeAreaView, View, Text } from 'react-native';

export default function TabTwoScreen() {
  const menu = Asset.fromModule(require("../../assets/images/playmenu.png")).uri;
  const arrow = Asset.fromModule(require("../../assets/images/arrow.png")).uri;
  const img = Asset.fromModule(require("../../assets/images/img.png")).uri;
  const control = Asset.fromModule(require("../../assets/images/music.png")).uri;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
      <Image source={{uri: arrow}} style={{width: 24, height: 24}}/>
        <Image source={{uri: menu}} style={{width: 24, height: 24}}/>
      </View>
      <Text style={styles.text}>Calming  Playlist</Text>
      <View style={{width: '100%', alignItems: 'center', marginTop: 23, paddingHorizontal: '10%', justifyContent: 'center'}}>
        <Image source={{uri: img}} style={{width: '100%', height: 300, borderRadius: 20}}/>
        <View style={{width: '100%', alignItems: 'center', marginTop: 23, marginBottom: 77}}>
        <Text style={styles.text2}>Rain On Glass</Text>
        <Text style={{fontSize: 16, fontFamily: 'Alegreya_400Regular', color: '#371B34'}}>By: Painting with Passion</Text>
        </View>
      </View>
      <View style={{width: '100%', alignItems: 'center', paddingHorizontal: '10%', justifyContent: 'center'}}>
      <Image source={{uri: control}} style={{width: '100%', height: 100}} resizeMode='contain'/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '5%'
  },
  menu: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: '5%'
  },
  text: {
    fontSize: 30,
    fontFamily: 'Alegreya_600SemiBold',
    color: '#371B34',
    marginTop: 35,
    paddingHorizontal: '5%'
  },
  text2: {
    fontSize: 35,
    fontFamily: 'Alegreya_700Bold',
    color: '#371B34',
  }
});
