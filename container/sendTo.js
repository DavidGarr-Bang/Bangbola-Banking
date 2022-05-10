import * as React from "react";
import { View, StyleSheet, SectionList, Pressable } from "react-native";

import {
  Avatar,
  Card,
  Text,
  Title,
  Paragraph,
  Caption,
  Chip,
  IconButton,
} from "react-native-paper";

import { shortData } from "../urtils/middleware";

import { useSelector, useDispatch } from "react-redux";

import Item from "../components/renderItems/sendTo";

export default function App({ navigation, route }) {
  const friends = useSelector((state) => state.users.users);

  const Move = (person) => {
    navigation.navigate("Payments", {
      payees: person,
    });
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={shortData([...friends])}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Item
            item={item}
            title={item.name}
            img={item.avatar_url}
            email={item.email}
            setPayess={Move}
          />
        )}
        renderSectionHeader={({ section: { name } }) => (
          <Text
            style={{
              marginLeft: 12,
              marginTop: 20,
              color: "rgba(49, 152, 212, 1)",
            }}
          >
            {name}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
