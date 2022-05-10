import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { Text, Card, Title } from "react-native-paper";

import { QRCode } from "react-native-custom-qr-codes-expo";

import { useSelector, useDispatch } from "react-redux";

export default function App({ navigation, route }) {
  const Bills = useSelector((state) => state.bills);
  const [loading, setLoading] = React.useState();
  React.useEffect(() => {}, []);

  const userDetails = { sort: "12-34-58", accountNo: "81656222" };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          borderRadius: 20,
        }}
      >
        <Title style={styles.paragraph}>
          Account Number: {userDetails.accountNo}
        </Title>
        <Title style={styles.paragraph}>Sort Code: {userDetails.sort}</Title>

        <View
          style={{
            padding: 10,
            backgroundColor: "rgb(49, 152, 212)",
            borderRadius: 10,
          }}
        >
          <QRCode
            content={userDetails.toString()}
            style={{ alignSelf: "center" }}
            // color={'#ffff'}
          />
        </View>
      </View>
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
    marginTop: 10,
    marginBottom: 12,
    color: "rgba(0,0,0,0.7)",
  },
});
