import React from "react";
import { View } from "react-native";
import { Card, IconButton, Title } from "react-native-paper";

const Item = ({ title, type, amount, date }) => {
  const icon =
    type === "bill" ? "newspaper-variant-outline" : "account-outline";
  return (
    <View style={{ marginLeft: 6, marginRight: 10, marginTop: 10 }}>
      <Card.Title
        title={title}
        titleStyle={{ fontSize: 16 }}
        subtitle={date}
        left={() => (
          <View
            style={{
              backgroundColor: "rgba(49, 152, 212,.1)",
              borderRadius: 14,
            }}
          >
            <IconButton
              size={20}
              style={{ backgroundColor: "rgba(0,0,0,0)", borderRadius: 10 }}
              icon={icon}
              color={"rgb(49, 152, 212)"}
            />
          </View>
        )}
        right={() => (
          <>
            <Title style={{ fontSize: 15, textAlign: "right" }}>
              £ -{parseFloat(amount).toFixed(2)}
            </Title>
          </>
        )}
      />
    </View>
  );
};

export default Item;
