import { Asset } from 'expo-asset';
import { StyleSheet, Image, Platform, SafeAreaView, View, Text } from 'react-native';

export default function TabTwoScreen() {
  const menu = Asset.fromModule(require("../../assets/images/playmenu.png")).uri;
  const arrow = Asset.fromModule(require("../../assets/images/arrow.png")).uri;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
      <Image source={{uri: arrow}} style={{width: 24, height: 24}}/>
        <Image source={{uri: menu}} style={{width: 24, height: 24}}/>
      </View>
      <Text>Calming  Playlist</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    marginTop: 35
  }
});
