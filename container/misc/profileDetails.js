import * as React from "react";
import { View, StyleSheet } from "react-native";

import { Text, Title, Caption, Divider, Subheading } from "react-native-paper";

export default function App() {
  function bbid() {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2);

    return head + tail;
  }

  const userName = {
    fname: "Julie",
    lname: "Andrews",
    address: "5 High Street LEEDS LS79 1KR",
    email: "julie@icloud.co.uk",
    accountNumber: "",
    BB_ID: bbid(),
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Name</Title>
      <Subheading style={styles.detail}>
        {userName.fname} {userName.lname}
      </Subheading>

      <Title style={styles.title}>Email</Title>
      <Subheading style={styles.detail}>{userName.email}</Subheading>

      <Title style={styles.title}>Address</Title>
      <Text style={styles.detail}>{userName.address}</Text>

      <Title style={styles.title}>BB ID</Title>
      <Subheading style={styles.detail}>{userName.BB_ID}</Subheading>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  title: {
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    textAlign: "left",
    color: "rgba(0,0,0,.8)",
  },

  detail: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 0,
  },
});
