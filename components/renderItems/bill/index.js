import React from "react";

import { Paragraph, Card, IconButton } from "react-native-paper";

import { Pressable, View } from "react-native";

const Item = ({
  title,
  date,
  amount,
  icon,
  color,
  color2,
  item,
  setIsVisible,
  setBill,
}) => (
  <Pressable
    onPress={() => {
      setIsVisible(true);
      setBill(item);
    }}
  >
    <Card.Title
      title={title}
      titleStyle={{ fontSize: 16 }}
      subtitle={"Payment date: " + date.format("L")}
      left={() => (
        <View style={{ backgroundColor: color, borderRadius: 14 }}>
          <IconButton
            size={20}
            style={{ backgroundColor: "rgba(0,0,0,0)", borderRadius: 10 }}
            icon={icon}
            color={color2}
          />
        </View>
      )}
      right={() => (
        <>
          <Paragraph
            style={{ marginTop: -8, textAlign: "right", marginRight: 10 }}
          >
            £{parseFloat(amount).toFixed(2)}
          </Paragraph>
        </>
      )}
    />
  </Pressable>
);

export default Item;
