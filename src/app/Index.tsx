import { View, Text, Button, Pressable, Image } from "react-native"
import React from "react"

const Index = () => {
  return (
    <View>
      <Button title="press me" onPress={() => alert("progress")} />
      <View
        style={{
          //   justifyContent: "flex-start",
          height: 100,
          backgroundColor: "red",
          //   flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <Pressable onPress={() => alert(1)}>
          <Text>1111111</Text>
        </Pressable>
        <Pressable onPressIn={() => alert(1)}>
          <Text>22222</Text>
        </Pressable>
        <Pressable onPressOut={() => alert(1)}>
          <Text>33333</Text>
        </Pressable>
        <Pressable onLongPress={() => alert(1)}>
          <Text>4444</Text>
        </Pressable>
        <Button title="测试" />
        <View>
          <Image
            style={{ width: 200, height: 200 }}
            source={require("../assets/images/image.png")}
          />
        </View>
        <View>
          <Image
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            style={{width: 100, height: 200}}
            resizeMode="contain" // contain, cover, stretch
          />
        </View>
      </View>
    </View>
  )
}

export default Index
