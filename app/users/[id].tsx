import { View, Text } from "react-native"
import React from "react"
import { useLocalSearchParams } from "expo-router"

const Users = () => {
  const { id } = useLocalSearchParams()
  return (
    <View>
      <Text>Users - {id}</Text>
    </View>
  )
}

export default Users
