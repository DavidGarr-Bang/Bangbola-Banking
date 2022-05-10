import React, { useEffect } from "react";
import { View, Text, TouchableHighlight, Pressable } from "react-native";

import { IconButton } from "react-native-paper";

import { useSelector, useDispatch } from "react-redux";

const NotificationsIcon = ({ navigation }) => {
  const Notifications = useSelector((state) => state.notifications.count);

  // useEffect(() => {
  //   console.log(Notifications);
  // }, []);

  return (
    <Pressable
      style={{ flexDirection: "row" }}
      onPress={() => navigation.push("notifications")}
    >
      {Notifications > 0 ? (
        <View
          style={{
            position: "absolute",
            height: 16,
            width: 16,
            borderRadius: 20 / 2,
            backgroundColor: "#3198d4",
            right: 10,
            bottom: 24,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 10 }}>
            {Notifications}
          </Text>
        </View>
      ) : null}

      <IconButton icon="bell-outline" />
    </Pressable>
  );
};

export default NotificationsIcon;
