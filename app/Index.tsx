import { View, Text, Button, Pressable, Image } from "react-native"
import React, { useReducer } from "react"
import { Link } from "expo-router"
interface State {
  count: number
}
// interface Action {
//   type: "increment" | "decrement"
// }
type Action = { type: "increment" } | { type: "decrement" }
const initialState: State = { count: 0 }
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    default:
      return state
  }
}
const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <View>
      <Text>count:{state.count}</Text>
      <Button title="+1" onPress={() => dispatch({ type: "increment" })} />
      <Button title="-1" onPress={() => dispatch({ type: "decrement" })} />
      <Link href="/About" >To About</Link>
      <Link href="/users/10" >To user</Link>
    </View>
  )
}

export default Index
