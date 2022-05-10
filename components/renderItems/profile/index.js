import React from "react";
import { List } from "react-native-paper";

const Item = ({ title, icon, place, navigation }) => {
  return (
    <List.Item
      onPress={() => navigation.push(place)}
      title={title}
      left={() => (
        <List.Icon
          style={{ backgroundColor: "rgba(49, 152, 212,.1)", borderRadius: 14 }}
          icon={icon}
          color={"rgb(49, 152, 212)"}
        />
      )}
      right={() => (
        <List.Icon color={"rgba(49, 152, 212,0.5)"} icon="chevron-right" />
      )}
    />
  );
};

export default Item;
