import * as React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import moment from "moment";
import { Card, Text, Title, Avatar, Subheading } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-native-uuid";

export default function App({ navigation, route }) {
  const [name, setName] = React.useState(
    route.params.payees.name || "Dawn Ramirez",
  );
  const [email, setEmail] = React.useState(
    route.params.payees.email || "No name showing",
  );
  const [Amount, setAmount] = React.useState(route.params.amount);

  React.useEffect(() => {
    // console.log(route.params);
  }, []);

  const dispatch = useDispatch();

  const makePayment = async () => {
    let res = await fetch(
      "https://universal-back-server.herokuapp.com/api/bank/transfer",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountNum: 12,
          pin: 1334,
          amount: 500,
          seconedAccountNum: 9994,
        }),
      },
    );
    let restext = res.json();

    let restates = res.status;

    if (restates == 201) {
      navigation.navigate("Home");
    } else {
      console.log("error");
    }
  };

  const payFrined = () => {
    dispatch({ type: "Reduce_Money", payload: route.params.amount });

    dispatch({
      type: "Add_To_transitions",
      payload: {
        type: "friend",
        title: name,
        amount: Amount,
        date: moment().format("L"),
      },
    });

    dispatch({
      type: "ADD_NOTE",
      payload: {
        id: uuid.v4(),
        title: `Money sent to ${name}`,
        subtitle: `£${Amount} has been sent to ${name}`,
        date: moment().format("L"),
        type: "paid",
      },
    });

    dispatch({
      type: "INCREMENT_COUNT",
    });

    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Subheading style={styles.paragraph}>To Payyee</Subheading>
      <Title style={{ textAlign: "left", marginLeft: 10 }}>{name}</Title>

      <Subheading style={styles.paragraph}>Amount</Subheading>

      <Title style={{ marginLeft: 10, marginRight: 10 }}>
        £{parseFloat(Amount).toFixed(2)}
      </Title>

      <Subheading style={styles.paragraph}>Account Number</Subheading>
      <Title style={{ marginLeft: 10, marginRight: 10 }}>20-123-39</Title>

      <Subheading style={styles.paragraph}>Sort Code</Subheading>
      <Title style={{ marginLeft: 10, marginRight: 10 }}>12-02-20</Title>

      <Pressable
        onPress={async () => payFrined()}
        style={{
          backgroundColor: "rgb(49, 152, 212)",
          position: "absolute",
          bottom: 0,
          padding: 6,
          width: "100%",
        }}
      >
        <Title style={{ color: "white", textAlign: "center" }}>Send</Title>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  paragraph: {
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    textAlign: "left",
    color: "rgba(0,0,0,.8)",
  },
});
