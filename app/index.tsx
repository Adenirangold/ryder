import { Redirect } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {
  return <Redirect href={"/(auth)/welcome"}></Redirect>;
};
export default home;
