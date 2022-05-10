import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

import Home from "../container/home";
import Profile from "../container/profile";

const MyComponent = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "music", title: "Home", icon: "home" },
    { key: "profile", title: "Profile", icon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: () => <Home {...props} />,
    profile: () => <Profile {...props} />,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: "white" }}
      activeColor={"rgb(49, 152, 212)"}
      inactiveColor={"rgba(49, 152, 212, .4)"}
    />
  );
};

export default MyComponent;
