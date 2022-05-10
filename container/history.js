import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text, Card } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import Item from "../components/renderItems/homeSectionList";

export default function App() {
  const history = useSelector((state) => state.money.transitions);

  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item, index) => item + index}
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
