import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const layout = () => {
  return (
    <Stack>
      <Stack.Screen
        options={{ headerShown: false }}
        name="(tabs)"
      ></Stack.Screen>
    </Stack>
  );
};

export default layout;
