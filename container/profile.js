import React from "react";
import { StyleSheet, View, SectionList } from "react-native";

import { Text } from "react-native-paper";
import Item from "../components/renderItems/profile";

const DATA = [
  {
    title: "",
    data: [
      {
        id: 0,
        title: "Personal Details",
        icon: "account-outline",
        place: "profileDetails",
      },
      { id: 3, title: "About", icon: "information-outline", place: "about" },
    ],
  },
];

const App = (props) => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item {...item} {...props} />}
        renderSectionHeader={({ section: { title } }) => <View />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
