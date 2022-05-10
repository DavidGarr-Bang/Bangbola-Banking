import * as React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { expo } from "../../app.json";

import { Text, Title, Subheading, Divider } from "react-native-paper";

export default function App() {
  return (
    <View style={styles.container}>
      {/* app name */}
      <Title style={[styles.paragraph]}>{expo.name}</Title>

      {/* app version number */}
      <Subheading style={styles.paragraph}>Version:{expo.version}</Subheading>

      {/* my author */}
      <Subheading style={styles.paragraph}>
        Author: David Garrick - Bangbola
      </Subheading>

      {/* socials */}
      <Text style={styles.paragraph}>Linked In</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  paragraph: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
});
