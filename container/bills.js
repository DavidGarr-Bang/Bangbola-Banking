import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Pressable,
} from "react-native";

import {
  Avatar,
  Card,
  IconButton,
  Paragraph,
  Title,
  Subheading,
} from "react-native-paper";

import moment from "moment";

import { useSelector, useDispatch } from "react-redux";
import { BottomSheet, ListItem } from "react-native-elements";

import Item from "../components/renderItems/bill";
import EmptyList from "../components/emptyList/emptyBills";

export default function App(props) {
  const { navigation, route } = props;
  const Bills = useSelector((state) => state.bills.currentbills);

  React.useEffect(() => {}, []);

  const [isVisible, setIsVisible] = useState(false);
  const [bill, setBill] = useState({
    id: "0",
    title: "Gas Bill",
    date: moment().add(1, "days"),
    amount: 74,
    color: "rgba(240, 91, 5, .2)",
    color2: "rgba(240, 91, 5, 1)",
    icon: "fire",
  });

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      date={item.date}
      amount={item.amount}
      color={"rgb(49, 152, 212)"}
      color2={"white"}
      icon={item.icon}
      item={item}
      setIsVisible={setIsVisible}
      setBill={setBill}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Bills}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <EmptyList {...props} />}
      />

      <BottomSheet
        isVisible={isVisible}
        containerStyle={{
          backgroundColor: "rgba(0.5, 0.25, 0, 0.2)",
        }}
        modalProps={{
          onRequestClose: () => setIsVisible(false),
          animationType: "fade",
        }}
      >
        <View
          style={{ borderRadius: 10, backgroundColor: "white", padding: 10 }}
        >
          <View
            style={{
              backgroundColor: "rgb(49, 152, 212)",
              borderRadius: 14,
              alignSelf: "center",
              margin: 10,
            }}
          >
            <IconButton
              size={30}
              style={{ backgroundColor: "rgba(0,0,0,0)", borderRadius: 10 }}
              icon={bill.icon}
              color={"white"}
            />
          </View>
          <Subheading
            style={{ margin: 0, fontWeight: "bold", textAlign: "center" }}
          >
            {bill.title}
          </Subheading>
          <Text
            style={{
              margin: 10,
              textAlign: "center",
              color: "rgba(0, 0, 0, 1)",
            }}
          >
            Your {bill.title} is due on the{" "}
            <Text style={{ fontWeight: "bold" }}>{bill.date.format("L")}</Text>{" "}
            would you like to pay it early?
          </Text>

          <View
            style={{ flexDirection: "row", padding: 10, alignSelf: "center" }}
          >
            <Pressable
              style={{
                margin: 5,
                backgroundColor: "rgba(0,0,0,0.1)",
                borderRadius: 10,
                paddingLeft: 30,
                paddingRight: 30,
                paddingBottom: 6,
                paddingTop: 6,
              }}
              onPress={() => setIsVisible(false)}
            >
              <Text style={{ color: "rgba(0,0,0,0.7)", padding: 4 }}>
                Cancel
              </Text>
            </Pressable>
            <Pressable
              style={{
                margin: 5,
                backgroundColor: "rgb(49, 152, 212)",
                borderRadius: 10,
                paddingLeft: 30,
                paddingRight: 30,
                paddingBottom: 6,
                paddingTop: 6,
              }}
              onPress={() => {
                setIsVisible(false);
                navigation.push("paymentBills", { bill: bill });
              }}
            >
              <Text style={{ color: "white", padding: 4 }}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "#fff",
  },
  paragraph: {
    margin: 10,
    color: "rgba(0,0,0,.9)",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
