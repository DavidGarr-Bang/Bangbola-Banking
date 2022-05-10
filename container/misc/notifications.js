import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { List } from "react-native-paper";
import EmptyList from "../../components/emptyList/notifications/index";
import Item from "../../components/renderItems/notifications";

import { Text, IconButton } from "react-native-paper";

import moment from "moment";

import { useSelector, useDispatch } from "react-redux";

const DATA = [
  {
    id: 0,
    title: "Phone bill paid",
    subtitle: "Your phone bill has been paid.",
    type: "paid",
    date: moment().subtract(13, "days").calendar(),
  },
  {
    id: 1,
    title: "Discount alart!",
    subtitle: "Up to 50% discount on face cosmetics.",
    type: "paid",
    date: moment().subtract(1, "days").calendar(),
  },
];

const App = (props) => {
  const { navigation } = props;

  const Notifications = useSelector((state) => state.notifications.information);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "CLEAR_COUNT" });
  }, []);

  const removeNote = (id) => {
    dispatch({ type: "REMOVE_NOTE", payload: id });
  };

  const renderItem = ({ item }) => <Item {...item} onPress={removeNote} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={Notifications}
        // data={[]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <EmptyList {...props} />}
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
