import React from "react";
import { Pressable } from "react-native";
import { Card } from "react-native-paper";

const Item = ({ item, title, email, img, setPayess }) => (
  <Pressable
    style={{ marginTop: 10 }}
    onPress={() => {
      setPayess(item);
    }}
  >
    <Card.Title
      title={title}
      titleStyle={{ fontSize: 16 }}
      // subtitle={email}
      // left={() => (
      //   <Avatar.Image
      //     size={46}
      //     source={{
      //       uri: img,
      //     }}
      //   />
      // )}
    />
  </Pressable>
);

export default Item;
