import Card from "@/components/card";
import CardBig from "@/components/CardBig";
import { data } from "@/utils";
import { Asset } from "expo-asset";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

const HomeLayout = () => {
  const menu = Asset.fromModule(require("../../assets/images/menu.png")).uri;
  const user = Asset.fromModule(require("../../assets/images/user.png")).uri;
  const people = Asset.fromModule(
    require("../../assets/images/people.png")
  ).uri;
  const fire = Asset.fromModule(require("../../assets/images/fire.png")).uri;
  const play = Asset.fromModule(require("../../assets/images/play.png")).uri;
  const time = Asset.fromModule(require("../../assets/images/image.png")).uri;

  const renderItem = ({ item }: any) => (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        marginRight: 33.42,
      }}
    >
      <Card color={item.color} img={item.img} />
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 28 }}>
      <View style={styles.header}>
        <Image
          source={{ uri: menu }}
          style={{ width: 32, height: 32 }}
          resizeMode='contain'
        />
        <Image
          source={{ uri: user }}
          style={{ width: 35, height: 35 }}
          resizeMode='contain'
        />
      </View>
      <Text style={styles.welcomeText}>
        Welcome back,{" "}
        <Text style={{ fontFamily: "Alegreya_700Bold" }}>Sarina!</Text>
      </Text>
      <View style={styles.feeling}>
        <Text style={styles.text}>How are you feeling today ?</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.feeling}>
        <Text style={styles.text}>Today’s Task</Text>
        <View style={styles.task}>
          <CardBig
            title={"Peer Group Meetup"}
            text={"Let’s open up to the  thing that matters amoung the people "}
            link={"Join Now"}
            icon={play}
            img={people}
            bg={"#FCDDEC"}
            linkColor={"#EF5DA8"}
          />
          <CardBig
            title={"Meditation"}
            text={
              "Aura is the most important thing that matters to you.join us on "
            }
            link={"06:00 PM"}
            icon={time}
            img={fire}
            bg={"#F09E5430"}
            linkColor={"#F09A59"}
          />
           <CardBig
            title={"Peer Group Meetup"}
            text={"Let’s open up to the  thing that matters amoung the people "}
            link={"Join Now"}
            icon={play}
            img={people}
            bg={"#FCDDEC"}
            linkColor={"#EF5DA8"}
          />
          <CardBig
            title={"Meditation"}
            text={
              "Aura is the most important thing that matters to you.join us on "
            }
            link={"06:00 PM"}
            icon={time}
            img={fire}
            bg={"#F09E5430"}
            linkColor={"#F09A59"}
          />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: "5%",
    width: "100%",
    gap: 28,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: "5%",
  },
  feeling: {
    paddingHorizontal: "5%",
    flexDirection: "column",
    gap: 23,
  },
  text: {
    fontSize: 22,
    fontFamily: "Alegreya_400Regular",
    color: "#371B34",
  },
  welcomeText: {
    flexDirection: "column",
    paddingHorizontal: "5%",
    fontSize: 30,
    fontFamily: "Alegreya_400Regular",
    color: "#371B34",
  },
  task: {
    // paddingHorizontal: "5%",
    flexDirection: "column",
    gap: 20,
  },
});

export default HomeLayout;
