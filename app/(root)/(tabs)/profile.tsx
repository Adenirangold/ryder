import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="bg-white flex-1 items-center justify-center">
      <Text className="text-2xl text-black">Hello World!</Text>
    </SafeAreaView>
  );
};
export default Profile;
