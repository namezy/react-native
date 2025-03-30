import { View, Text } from "react-native"
import React from "react"
import { Stack, Tabs } from "expo-router"
const Navbar = () => {
  return (
    <View style={{ backgroundColor: "blue", padding: 20 }}>
      <Text style={{ color: "white", fontSize: 20 }}>My App Navbar</Text>
    </View>
  )
}
const RootLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Navbar /> */}
      {/* <Stack>
        <Stack.Screen name="Index" options={{ headerTitle: "首页" }} />
        <Stack.Screen name="About" options={{ headerTitle: "关于" }} />
        <Stack.Screen name="users/[id]" options={{ headerTitle: "用户" }} />
      </Stack> */}
      <Tabs initialRouteName="index">
        <Tabs.Screen name="index" options={{ headerTitle: "首页" }} />
        <Tabs.Screen name="About" options={{ headerTitle: "关于" }} />
        <Tabs.Screen
          name="users/[id]"
          options={{
            title: "用户1",
            tabBarLabel: "用户2",
            tabBarBadge: 5,
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",

            tabBarBadgeStyle: {
              backgroundColor: "red",
              color: "white",
            },
          }}
        />
      </Tabs>
    </View>
  )
}

export default RootLayout
