import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  SectionList,
  Pressable,
  SafeAreaView,
  FlatList,
} from "react-native";

import {
  Avatar,
  IconButton,
  Title,
  Card,
  Caption,
  Paragraph,
  Subheading,
} from "react-native-paper";

import { useSelector, useDispatch } from "react-redux";
import Item from "../components/renderItems/homeSectionList";

export default function Home({ navigation }) {
  const Usermoney = useSelector((state) => state.money.money);
  const history = useSelector((state) => state.money.transitions);

  const menu = [
    {
      title: "Transfer",
      icon: "card-bulleted",
      place: "SendTo",
    },
    {
      title: "Receive",
      icon: "cash-multiple",
      place: "Recive",
    },
    {
      title: "Utility bills",
      icon: "newspaper-variant",
      place: "Bills",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Subheading
        style={{
          textAlign: "center",
        }}
      >
        Your Balance
      </Subheading>
      <Title style={{ textAlign: "center", marginTop: 0 }}>
        {Usermoney ? "£" + parseFloat(Usermoney).toFixed(2) : "loading"}
      </Title>

      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        {menu.map((i, l) => (
          <Pressable
            style={{
              margin: 4,
            }}
            key={l}
            onPress={() => navigation.push(i.place)}
          >
            <View
              style={{
                margin: 10,
                backgroundColor: "rgb(49, 152, 212)",
                borderRadius: 14,
                alignSelf: "center",
              }}
            >
              <IconButton
                size={20}
                style={{ backgroundColor: "rgba(0,0,0,0)", borderRadius: 10 }}
                icon={i.icon}
                color={"white"}
              />
            </View>

            <Text
              style={{
                textAlign: "center",
                color: "rgba(0,0,0,0.6)",
                marginTop: -4,
              }}
            >
              {i.title}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Subheading
          style={{ color: "rgba(0,0,0,.8)", textAlign: "left", marginLeft: 22 }}
        >
          Recent translations
        </Subheading>
        <Subheading
          style={{
            flex: 1,
            color: "rgba(0,0,0,.4)",
            textAlign: "right",
            margin: 10,
          }}
          onPress={() => navigation.push("history")}
        >
          History
        </Subheading>
      </View>

      <FlatList
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        data={history.reverse()}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item {...item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});
