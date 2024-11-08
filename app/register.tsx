import { useState } from "react";
import { TextInput, Text, Button, Checkbox } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import BlueCheck from "./components/home/blueCheck";

export interface IAppProps {}

export default function register(props: IAppProps) {
  const [info, setInfo] = useState<{
    username: string;
    email: string;
    password: string;
  }>({
    username: "",
    email: "",
    password: "",
  });

  const [visible, setVisible] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <BlueCheck />
      <View>
        <Image
          source={require("../assets/images/register.png")}
          style={styles.Logo}
        />
      </View>
      <View>
        <Text variant="headlineSmall">Register with connecty</Text>
      </View>
      <View style={{ height: 20 }}></View>
      <View style={styles.form}>
        <TextInput
          label="username"
          value={info.username}
          mode="flat"
          left={<TextInput.Icon icon="account" />}
          onChangeText={(text) => setInfo((f) => ({ ...f, username: text }))}
        />
        <TextInput
          label="Email"
          value={info.email}
          mode="flat"
          left={<TextInput.Icon icon="email" />}
          onChangeText={(text) => setInfo((f) => ({ ...f, email: text }))}
        />
        <TextInput
          label="password"
          secureTextEntry={visible ? true : false}
          value={info.password}
          mode="flat"
          left={<TextInput.Icon icon="lock" />}
          onChangeText={(text) => setInfo((f) => ({ ...f, password: text }))}
          right={
            <TextInput.Icon
              icon={visible ? "eye" : "eye-off"}
              onPress={() => {
                alert("i'm pressed");
                setVisible((old) => !old);
              }}
            />
          }
        />
      </View>
      <View style={styles.remember}>
        <Checkbox
          status={check ? "checked" : "unchecked"}
          onPress={() => setCheck((old) => !old)}
        />
        <Text variant="titleMedium" style={{ color: "#616161" }}>
          remember me
        </Text>
      </View>
      <View style={styles.submit}>
        <Button mode="contained" onPress={() => console.log("good move")}>
          Register
        </Button>
      </View>
      <View style={styles.account}>
        <Text variant="labelLarge">already have an account? </Text>
        <Link style={styles.RegisterTextLink} href={"/"}>
          login
        </Link>
      </View>
      <View style={styles.decisionBar}>
        <View style={styles.leftLine} />
        <View>
          <Text variant="labelSmall">oR</Text>
        </View>
        <View style={styles.rightLine} />
      </View>
      <View style={styles.Google}>
        <Button
          mode="outlined"
          style={{ borderColor: "rgba(0, 0, 255, 0.4)", borderWidth: 0.6 }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 7,
            }}
          >
            <View>
              <Image
                source={require("../assets/images/googleIcon.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>
            <View>
              <Text variant="labelLarge" style={styles.GoogleText}>
                Login with google
              </Text>
            </View>
          </View>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  submit: {
    display: "flex",
    marginTop: 25,
    width: "90%",
  },
  forgot: {
    alignSelf: "flex-end",
    marginRight: 7,
    paddingBottom: 5,
    color: "#7e57c2",
    textDecorationColor: "#7e57c2",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
  Logo: {
    width: 90,
    height: 90,
    resizeMode: "cover",
  },
  remember: {
    marginLeft: 12,
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
  },
  account: {
    alignSelf: "flex-end",
    marginRight: 26,
    display: "flex",
    flexDirection: "row",
    gap: 2,
    backgroundColor: "",
    marginTop: 2,
  },
  decisionBar: {
    width: "90%",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  leftLine: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.3)",
    flexGrow: 1,
  },
  rightLine: {
    flexGrow: 1,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.3)",
  },
  Google: {
    marginTop: 22,
    width: "90%",
  },
  GoogleText: {
    color: "blue",
    fontWeight: "bold",
  },
  RegisterTextLink: {
    color: "#7e57c2",
    textDecorationColor: "#7e57c2",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    textTransform: "capitalize",
  },
});
