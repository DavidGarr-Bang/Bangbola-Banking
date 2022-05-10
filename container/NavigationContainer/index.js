import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NotificationsIcon from "../../components/icons/NotificationsIcon";

import "react-native-gesture-handler";

import About from "../misc/about";
import ProfileDetails from "../misc/profileDetails";
import Notifications from "../misc/notifications";

import Payments from "../payments";
import SendTo from "../sendTo";
import Confirm from "../confirm";
import Bills from "../bills";
import paymentBills from "../payment_bills";
import Recive from "../recive";
import History from "../history";

import HomeScreenTabs from "../homeTabs";

const Stack = createStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontSize: 18,
            marginTop: -3,
            marginLeft: -10,
          },
          headerStyle: { elevation: 0, shadowOpacity: 0 },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreenTabs}
          options={({ navigation }) => ({
            headerTitle: "",
            headerRight: () => <NotificationsIcon navigation={navigation} />,
          })}
        />

        <Stack.Screen
          name="SendTo"
          component={SendTo}
          options={{ title: "Tansfer money" }}
        />

        <Stack.Screen
          name="Recive"
          component={Recive}
          options={{
            title: "Receive money",
          }}
        />

        <Stack.Screen
          name="Bills"
          component={Bills}
          options={{
            title: "Your bills",
          }}
        />

        <Stack.Screen
          name="paymentBills"
          component={paymentBills}
          options={{ title: "Pay Bill" }}
        />

        <Stack.Screen
          name="Payments"
          component={Payments}
          options={{ title: "Payments" }}
        />

        <Stack.Screen
          name="confirm"
          component={Confirm}
          options={{ title: "Confirm payment" }}
        />

        <Stack.Screen
          name="about"
          component={About}
          options={{ title: "About" }}
        />

        <Stack.Screen
          name="profileDetails"
          component={ProfileDetails}
          options={{ title: "Profile Details" }}
        />

        <Stack.Screen
          name="notifications"
          component={Notifications}
          options={{ title: "Notifications" }}
        />

        <Stack.Screen
          name="history"
          component={History}
          options={{ title: "History" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
