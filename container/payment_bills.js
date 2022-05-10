import * as React from "react";

import moment from "moment";
import { View, StyleSheet, Pressable } from "react-native";
import { Card, Text, Title, Avatar, Subheading } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-native-uuid";

export default function App({ navigation, route }) {
  const dispatch = useDispatch();
  const bills = useSelector((state) => state.bills.currentbills);

  // React.useEffect(() => {
  //   console.log(route.params);
  // }, []);

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

  const removeBill = (item) => {
    item["datePayed"] = moment().format("DD/MM/YYYY, h:mm:ss a");

    dispatch({ type: "Add_To_History", payload: item });
    dispatch({ type: "Reduce_Money", payload: item.amount });

    dispatch({
      type: "Add_To_transitions",
      payload: {
        type: "bill",
        title: item.title,
        amount: item.amount,
        date: moment().format("L"),
      },
    });

    dispatch({
      type: "ADD_NOTE",
      payload: {
        id: uuid.v4(),
        title: `${item.title} is paid`,
        subtitle: `Your ${item.title} has been paid.`,
        date: item.datePayed,
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
      <Subheading style={styles.paragraph}>To</Subheading>
      <Title style={{ textAlign: "left", marginLeft: 10 }}>
        {route.params.bill.comapany}
      </Title>

      <Subheading style={styles.paragraph}>Bill</Subheading>
      <Title style={{ marginLeft: 10, marginRight: 10 }}>
        {route.params.bill.title}
      </Title>

      <Subheading style={styles.paragraph}>Amount</Subheading>
      <Title style={{ marginLeft: 10, marginRight: 10 }}>
        £{parseFloat(route.params.bill.amount).toFixed(2)}
      </Title>

      <Subheading style={styles.paragraph}>Account Number</Subheading>
      <Title style={{ marginLeft: 10, marginRight: 10 }}>
        {route.params.bill.accountNo}
      </Title>

      <Subheading style={styles.paragraph}>Sort Code</Subheading>
      <Title style={{ marginLeft: 10, marginRight: 10 }}>
        {route.params.bill.sort}
      </Title>

      <Pressable
        onPress={() => removeBill(route.params.bill)}
        style={{
          backgroundColor: "rgb(49, 152, 212)",
          position: "absolute",
          bottom: 0,
          padding: 6,
          width: "100%",
        }}
      >
        <Title style={{ color: "white", textAlign: "center" }}>Pay Bill</Title>
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
