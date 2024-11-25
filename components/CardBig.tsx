import { Asset } from "expo-asset";
import { Link } from "expo-router";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const CardBig = ({
  title,
  text,
  link,
  icon,
  img,
  bg,
  linkColor,
}: {
  title: string;
  text: string;
  link: string;
  icon: string;
  img: any;
  bg: string;
  linkColor: string;
}) => {
  return (
    <View style={[{ backgroundColor: bg }, styles.container]}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 10,
          width: "70%",
        }}
      >
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.secText}>{text}</Text>
        <View style={{ flexDirection: "row", gap: 5 }}>
        <Link
          href={"/"}
          style={{
            fontFamily: "Alegreya_700Bold",
            fontSize: 20,
            color: linkColor,
            gap: 5,
          }}
        >
         {link}
          
        </Link>
        <Image
            source={{ uri: icon }}
            style={{
              width: 15,
              height: 15,
              alignSelf: "center",
              marginTop: 3,
            }}
            resizeMode='contain'
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{ uri: img }}
          style={{ width: 85.27, height: 80}}
          resizeMode='contain'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 157,
    borderColor: "#EDE6FC",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 25,
    color: "#371B34",
    fontFamily: "Alegreya_600SemiBold",
  },
  secText: {
    fontSize: 15,
    color: "#371B34",
    fontFamily: "Alegreya_400Regular",
  },
});

export default CardBig;
