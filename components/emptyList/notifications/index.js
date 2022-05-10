import * as React from "react";
import { View, StyleSheet, Image, Dimensions, Pressable } from "react-native";

import { Text, Title, Subheading, Button, Avatar } from "react-native-paper";

function App(props) {
  const { navigation } = props;
  const height = Dimensions.get("screen").height;

  const styles = StyleSheet.create({
    container: {
      marginTop: height / 4,
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      marginTop: 20,
      backgroundColor: "#3198d4",
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 3,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
    },
    paragraph: {
      marginLeft: 20,
      marginRight: 20,
      textAlign: "center",
    },
    title: {
      margin: 10,
      fontWeight: "bold",
      textAlign: "center",
    },
    icon: {
      backgroundColor: "#3198d4",
    },
  });

  return (
    <View style={styles.container}>
      <Avatar.Icon
        icon="newspaper-variant"
        style={styles.icon}
        color={"white"}
      />
      <Title style={styles.title}>NO NOTIFICATIONS</Title>
      <Subheading style={styles.paragraph}>
        You seem to have no notifications.
      </Subheading>

      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </Pressable>
    </View>
  );
}

export default App;
