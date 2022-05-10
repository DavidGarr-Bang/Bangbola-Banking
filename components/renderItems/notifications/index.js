import * as React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Text, List, Title } from "react-native-paper";

const Item = ({ id, title, subtitle, type, date, onPress }) => {
  const iconType =
    type === "paid"
      ? "star-four-points"
      : type === "information"
      ? "alert-decagram"
      : "star-four-points";

  return (
    <View style={styles.container}>
      <List.Icon icon={iconType} color={"rgb(49, 152, 212 )"} />

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{subtitle}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Pressable onPress={() => onPress(id)}>
        <List.Icon icon={"close"} color={"rgba(0, 0, 0, .7 )"} />
      </Pressable>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
  },
  description: { color: "rgba(0,0,0,0.6)", marginTop: 6 },
  date: { color: "rgba(0,0,0,0.6)", marginTop: 10, fontWeight: "bold" },
});
