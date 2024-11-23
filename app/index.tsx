import { useNavigation } from "@react-navigation/native";
import { Asset } from "expo-asset";
import { Link, useRouter,  } from "expo-router";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Hello = () => {
    const imagePath = Asset.fromModule(require("../assets/images/circle.png")).uri;
    const imagePath2 = Asset.fromModule(require("../assets/images/illustration.png")).uri;
    const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.text}>It’s Ok Not To Be OKAY !!</Text>
    
    <View style={styles.bg}>
      <Image 
        source={{ uri: imagePath }} 
        style={styles.image} 
        resizeMode="contain" 
      />
      <Image 
        source={{ uri: imagePath2 }} 
        style={styles.img}  
        // resizeMode="contain" 
      />
    </View>
    
    <TouchableOpacity style={styles.btn} onPress={() => router.push("/(tabs)")}>
      <Text style={styles.buttonText}>Let Us Help You</Text>
    </TouchableOpacity>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#AEAFF7",
      paddingTop: 40,
      paddingHorizontal: 20,
    },
    text: {
      color: "#FFFFFF",
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 20,
      fontFamily: 'Alegreya_700Bold',
    },
    bg: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      position: "relative",
      marginTop: 40,
    },
    image: {
      position: "absolute",
      width: 392,
      height: 392,
      top: 50,
      left: -70,
      zIndex: 0,
    },
    img: {
      width: 328,
      height: 650,
      zIndex: 1,
      position: "absolute",
      top: 0, // Ensures it appears above the circle
    },
    btn: {
      backgroundColor: "#371B34",
      borderRadius: 10,
      width: 293,
      height: 70,
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "600",
        fontFamily: 'Alegreya_600SemiBold',
      },
  });
  
export default Hello;
