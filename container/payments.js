import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Avatar, Title } from "react-native-paper";

export default function Home({ navigation, route }) {
  const [moneny, setMoney] = React.useState(undefined);
  const [amount, setAmout] = React.useState(false);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "icon"];

  React.useEffect(() => {
    const getAmount = async () => {
      let res = await fetch(
        "https://universal-back-server.herokuapp.com/api/bank/view/account",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: 500,
            accountNum: 12,
            pin: 1634,
          }),
        },
      );
      let restext = await res.json();
      // console.log({ res: restext, status: res.status });

      if (res.status == 200) {
        setMoney(restext.amount);
      } else {
        console.log("");
      }
    };

    // getAmount().catch(console.error);
  }, [moneny]);

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 26,
          marginTop: 90,
          color: "rgba(0,0,0,0.6)",
        }}
      >
        £{amount == false ? 0 : amount}
      </Text>

      <FlatList
        style={{ alignSelf: "center", marginTop: 10 }}
        data={array}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: "center",
              margin: 10,
              width: 90,
              alignSelf: "center",
              borderRadius: 70 / 2,
              alignItems: "center",
              //  backgroundColor: "rgba(0,0,255,0.1)",
            }}
          >
            {item == "icon" ? (
              <Pressable
                onPress={() => setAmout(amount.substr(0, amount.length - 1))}
              >
                <Avatar.Icon
                  size={36}
                  icon="backspace-outline"
                  style={{
                    backgroundColor: "rgba(0,0,0,0)",
                    alignSelf: "center",
                  }}
                  color={"rgba(0,0,0,0.8)"}
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  amount == false
                    ? setAmout(item.toString())
                    : setAmout(amount.toString().concat(item.toString()));
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    padding: 20,
                    color: "rgba(0,0,0,0.8)",
                  }}
                >
                  {item}
                </Text>
              </Pressable>
            )}
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
      {amount ? (
        <Pressable
          onPress={() => {
            navigation.navigate("confirm", {
              amount: amount,
              payees: route.params.payees,
            });
          }}
          style={{
            backgroundColor: "rgb(49, 152, 212)",
            position: "absolute",
            bottom: 0,
            padding: 6,
            width: "100%",
          }}
        >
          <Title style={{ color: "#fff", textAlign: "center" }}>Next</Title>
        </Pressable>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
